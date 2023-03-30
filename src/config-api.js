module.exports = {
    ipconf: {},
    setIp: (ip) => module.exports.ipconf.ip = ip,
    setType: (type) => {
        if (type == "json" || type == "xml" || type == "csv" || type == "line" || type == "php") module.exports.ipconf.type = type;
        else module.exports.ipconf.type = "json";
    },
    getConfig: () => {
    	return module.exports.ipconf;
    }
}