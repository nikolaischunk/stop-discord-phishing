const axios = require("axios").default;

const URL_GUARANTEED =
  "https://raw.githubusercontent.com/nikolaischunk/discord-phishing-links/main/domain-list.json";
const URL_SUSPICIOUS =
  "https://raw.githubusercontent.com/nikolaischunk/discord-phishing-links/main/suspicious-list.json";
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

let cacheDate = 0;
let cache = null;

/**
 * Update's the cached data.
 * @param {boolean} force - Whether to force fetch the data by ignoring the cache.
 * @returns {Promise<void>}
 */
async function updateCache(force = false) {
  if (force || cache === null || Date.now() - cacheDate > CACHE_DURATION) {
    const promises = await Promise.all([
      axios.get(URL_GUARANTEED),
      axios.get(URL_SUSPICIOUS),
    ]);

    cache = {
      guaranteed: promises[0].data,
      suspicious: promises[1].data,
    };

    cacheDate = Date.now();
  }
}

/**
 * Returns all phising domains.
 * @param {boolean} force - Whether to force fetch the data by ignoring the cache.
 * @returns {string[]} An array of links.
 */
exports.listPhishingDomains = async function listPhishingDomains(force = false) {
  await updateCache(force);
  return cache.guaranteed.domains;
};

/**
 * Returns all suspicious domains.
 * @param {boolean} force - Whether to force fetch the data by ignoring the cache.
 * @returns {string[]} An array of links.
 */
exports.listSuspiciousDomains = async function listSuspicious(force = false) {
  await updateCache(force);
  return cache.suspicious.domains;
};

/**
 * Returns all confirmed and suspicious domains.
 * @param {boolean} force - Whether to force fetch the data by ignoring the cache.
 * @returns {string[]} An array of links.
 */
exports.listAllDomains = async function listAllDomains(force = false) {
  await updateCache(force);
  return cache.guaranteed.domains.concat(cache.suspicious.domains);
};
