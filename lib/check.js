const list = require("./list");

exports.checkMessage = async function checkMessage(message, scanSuspiciousDomains = false) {
  let domains = await list.listDomains();
  let suspiciousDomains = scanSuspiciousDomains ? await list.listSuspicious() : null;

  function susDomainsChecker(arg) {
    if (domains.some((domain) => arg.endsWith(domain))) {
      return true;
    } else if (scanSuspiciousDomains) {
      if (suspiciousDomains.some((domain) => arg.endsWith(domain))) {
        return true;
      }
    }
    return false;
  };

  var susDomainsArgs = [];

  // https://stackoverflow.com/questions/6038061/regular-expression-to-find-urls-within-a-string#comment110332325_6041965
  const regex = /((http|ftp|https)\:\/\/)?([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/g;

  let m;

  // Extract all the matched urls
  while ((m = regex.exec(message.toLowerCase())) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    m.forEach((match, groupIndex) => {
      // Extract the domain
      if (groupIndex == 3) {
        susDomainsArgs.push(match);
      }
    });
  }

  return susDomainsArgs.some(susDomainsChecker);
};
