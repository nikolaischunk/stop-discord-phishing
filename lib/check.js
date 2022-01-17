exports.check = async function (message) {
  const urlRegex = /(?<=https?:\/\/)\S+\.[^\s\/]+/gm;
  let list = require("./list");
  let domains = await list.getDomains();
  return message.match(urlRegex)?.some(domain => 
    domains.some(d => domain.endsWith(d))
  ) ?? false;
};
