const list = require("./list");

exports.checkMessage = async function checkMessage(message, scanSuspiciousDomains = false) {
  let domains = await list.listDomains();
  let suspiciousDomains = scanSuspiciousDomains ? await list.listSuspicious() : null;

  function susDomainsChecker(arg) {
    if (domains.some((domains) => arg.includes(domains))) {
      return true;
    } else if (scanSuspiciousDomains) {
      if (suspiciousDomains.some((domain) => arg.includes(domain))) {
        return true;
      }
    }
    return false;
  };

  const susDomainsArgs = message.toLowerCase().split(/\s+/);

  return susDomainsArgs.some(susDomainsChecker);
};
