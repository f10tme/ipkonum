const config = require("./config-api");

module.exports.request = (ip, type) => {
    console.log(config.setIp(ip));
    config.setType(type);
    const baseUrl = `http://ip-api.com/${config.ipconf.type}/${config.ipconf.ip}`;
    const out = fetch(baseUrl)
    .then(response => response.json())
    .then(data => data)
    .catch(err => err);
    return out;
}