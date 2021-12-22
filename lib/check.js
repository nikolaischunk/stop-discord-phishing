exports.check = async function (message) {
  let list = require("./list");
  let domains = await list.getDomains();
  const susDomainsChecker = (arg) =>
    domains.some((domains) => arg.includes(domains));
  const susDomainsArgs = message.toLowerCase().split(/ +/);
  const susDomainsMatching = susDomainsArgs.filter(susDomainsChecker);
  return susDomainsMatching.length ? true : false;
};
