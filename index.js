const ipKonum = require("./src/main");

module.exports.getDetails = async (ip,type) => {
	const data = ipKonum.request(ip,type);
	return data;
}