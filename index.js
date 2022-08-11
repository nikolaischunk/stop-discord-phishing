const check = require("./lib/check");
const list = require("./lib/list");
const amount = require("./lib/amount");

exports.checkMessage = check.checkMessage;

exports.listAllDomains = list.listAllDomains;
exports.listPhishingDomains = list.listPhishingDomains;
exports.listSuspiciousDomains = list.listSuspiciousDomains;

exports.phishingDomainCount = amount.phishingDomainCount;
exports.suspiciousDomainCount = amount.suspiciousDomainCount;
exports.domainCount = amount.domainCount;
