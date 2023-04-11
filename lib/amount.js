const list = require("./list");

/**
 * Returns the total amount of detected phising domains.
 * @returns {number} The number of detected domains
 */
exports.phishingDomainCount = async function phishingDomainCount() {
  let domains = await list.listPhishingDomains();
  return domains.length;
};

/**
 * Returns the total amount of suspicious domains.
 * @returns {number} The number of suspicious domains
 */
exports.suspiciousDomainCount = async function suspiciousDomainCount() {
  let domains = await list.listSuspiciousDomains();
  return domains.length;
};

/**
 * Returns the total amount of confirmed and suspicious domains.
 * @returns {number} The number of confirmed and suspicious domains.
 */
exports.domainCount = async function domainCount() {
  let domains = await list.listAllDomains();
  return domains.length;
};
