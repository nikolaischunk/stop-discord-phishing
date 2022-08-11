const list = require("./list");

exports.phishingDomainCount = async function phishingDomainCount() {
  let domains = await list.listDomains();
  return domains.length;
};

exports.suspiciousDomainCount = async function suspiciousDomainCount() {
  let domains = await list.listSuspicious();
  return domains.length;
};
exports.domainCount = async function domainCount() {
  let domains = await list.listAllDomains();
  return domains.length;
};
