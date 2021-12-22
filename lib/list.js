const axios = require("axios").default;
exports.getDomains = async function getList() {
  const url =
    "https://raw.githubusercontent.com/nikolaischunk/discord-phishing-links/main/domain-list.json";
  const list = await axios.get(url);
  return list.data.domains;
};
