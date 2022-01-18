const list = require("./list");

exports.checkMessage = async function checkMessage(message) {
  let domains = await list.listDomains();

  const susDomainsChecker = (arg) =>
    domains.some((domains) => arg.includes(domains));

  const susDomainsArgs = message.toLowerCase().split(/\s+/);

  return susDomainsArgs.some(susDomainsChecker);
};
