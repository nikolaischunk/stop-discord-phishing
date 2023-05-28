const axios = require("axios").default;

const URL_GUARANTEED =
  "https://raw.githubusercontent.com/nikolaischunk/discord-phishing-links/main/domain-list.json";
const URL_SUSPICIOUS =
  "https://raw.githubusercontent.com/nikolaischunk/discord-phishing-links/main/suspicious-list.json";
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

let cache_date = 0;
let cache = null;

async function update_cache() {
  if (cache === null || Date.now() - cache_date > CACHE_DURATION) {
    let promises = await Promise.all([
      axios.get(URL_GUARANTEED),
      axios.get(URL_SUSPICIOUS),
    ]);
    cache = {
      guaranteed: promises[0].data,
      suspicious: promises[1].data,
    };
    cache_date = Date.now();
  }
}

/**
 * Returns all phising domains.
 * @returns {Promise<string[]>} An array of links.
 */
exports.listPhishingDomains = async function listPhishingDomains() {
  await update_cache();
  return cache.guaranteed.domains;
};

/**
 * Returns all suspicious domains.
 * @returns {Promise<string[]>} An array of links.
 */
exports.listSuspiciousDomains = async function listSuspiciousDomains() {
  await update_cache();
  return cache.suspicious.domains;
};

/**
 * Returns all confirmed and suspicious domains.
 * @returns {Promise<string[]>} An array of links.
 */
exports.listAllDomains = async function listAllDomains() {
  await update_cache();
  return cache.guaranteed.domains.concat(cache.suspicious.domains);
};
