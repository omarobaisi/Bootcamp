let { FINANCE, WEATHER, EMOTIONS } = require("./consts");

const handleComplaints = function (complaint) {
  if (complaint.type === FINANCE) {
    console.log("Money doesn’t grow on trees, you know.");
  } else if (complaint.type === WEATHER) {
    console.log("It is the way of nature. Not much to be done.");
  } else if (complaint.type === EMOTIONS) {
    console.log("It’ll pass, as all things do, with time.");
  }
};

module.exports = handleComplaints;
