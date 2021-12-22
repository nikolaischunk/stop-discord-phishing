exports.checkMessage = async function (message) {
  let checkMessage = require("./lib/check");
  let isTokengrabber = await checkMessage.check(message);
  return isTokengrabber;
};

exports.listDomains = async function () {
  let list = require("./lib/list");
  return await list.getDomains();
};
