const list = require("./list");

exports.checkMessage = async function checkMessage(
  message,
  scanSuspiciousDomains = false
) {
  let domains = await list.listPhishingDomains();
  let suspiciousDomains = scanSuspiciousDomains
    ? await list.listSuspiciousDomains()
    : null;

  function checkDomain(domainToCheck, susDomain) {
    const checkPath = /\/[^\s]+/;

    // Lets check if the susDomain has a path
    if (checkPath.test(susDomain)) {
      // If so then check for an exact match
      return domainToCheck[1] === susDomain;
    } else {
      // If not then check just the domain
      return domainToCheck[2] === susDomain;
    }
  }

  function susDomainsChecker(arg) {
    if (domains.some((domain) => checkDomain(arg, domain))) {
      return true;
    } else if (scanSuspiciousDomains) {
      if (suspiciousDomains.some((domain) => checkDomain(arg, domain))) {
        return true;
      }
    }
    return false;
  }

  var susDomainsArgs = [];

  // Match urls only
  // Example: https://discordapp.com/test/
  // Group 1: domain + path (discordapp.com/test)
  // Group 2: domain (discordapp.com)
  // Group 3: path (/test)
  const regex =
    /(?:(?:https?|ftp|mailto):\/\/)?(?:www\.)?(([^\/\s]+\.[a-z\.]+)(\/[^\s]*)?)(?:\/)?/gi;

  let m;

  // Extract all the matched urls
  while ((m = regex.exec(message.toString().toLowerCase())) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    susDomainsArgs.push(m);
  }

  return susDomainsArgs.some(susDomainsChecker);
};
