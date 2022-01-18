const axios = require("axios").default;

const URL = "https://raw.githubusercontent.com/nikolaischunk/discord-phishing-links/main/domain-list.json";
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

let cache_date = 0;
let cache = null;

exports.listDomains = async function listDomains() {
  if (cache === null || Date.now() - cache_date > CACHE_DURATION) {
    cache = (await axios.get(URL)).data;
    cache_date = Date.now();
  }
  return cache.domains;
};
