# IP Konum(Location) Finder
## Install
`npm i --save ipkonum`

## _type_ Parameter
- json `json`
- xml `xml`
- csv `csv`
- newline `line`
- php `php`,
- Default Json `json`

### Example 1 | Classic
```node
const ipkonum = require("ipkonum");
async function getKonum(ip,type) {
	const data = await ipkonum.getDetails(ip,type);
	console.log(data);
}

getKonum("88.888.888.888");
```
### Example 2 | Express
#### Express Install
`npm i --save express`
```node
// EXPRESS
const express = require("express");
const app = express();

// IPKONUM
const ipkonum = require("ipkonum");

app.get("*",async (req, res) => {
	let ip = req.headers['cf-connecting-ip'] || req.connection.remoteAddress;
	const konum = await ipkonum.getDetails(ip);
	res.send(`Location: ${konum.city}`);
});
app.listen(<PORT>); // http://localhost:<PORT>
```
# Response Examples
## Response Json
```json
{
  "status": "success",
  "country": "Turkey",
  "countryCode": "TR",
  "region": "06",
  "regionName": "Ankara",
  "city": "Ankara",
  "zip": "99000",
  "lat": 50,
  "lon": 50,
  "timezone": "Europe/Istanbul",
  "isp": "Server",
  "org": "Server A.S",
  "as": "Model A.S.",
  "query": "88.888.888.888"
}
```

## Response Xml
```
<?xml version="1.0" encoding="UTF-8" ?>
<query>
	<status>success</status>
	<country>Turkey</country>
	<countryCode>TR</countryCode>
	<region>06</region>
	<regionName>Ankara</regionName>
	<city>Ankara</city>
	<zip>99000</zip>
	<lat>50</lat>
	<lon>50</lon>
	<timezone>Europe/Istanbul</timezone>
	<isp>Server</isp>
	<org>Server A.S</org>
	<as>Model A.S.</as>
	<query>88.888.888.888</query>
</query>
```

## Response Csv
```csv
status,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query
success,Turkey,TR,06,Ankara,Ankara,99000,50,50,Europe/Istanbul,Server,Server A.S,Model A.S.,88.888.888.888
```

## Response Newline
```
success
Turkey
TR
06
Ankara
Ankara
99000
50
50
Europe/Istanbul
Server
Server A.S
Model A.S.
88.888.888.888
```

## Response Php
```php
{"status": "success","country": "Turkey","countryCode": "TR","region": "06","regionName": "Ankara","city": "Ankara","zip": "99000","lat": 50,"lon": 50,"timezone": "Europe/Istanbul","isp": "Server","org": "Server A.S","as": "Model A.S.","query": "88.888.888.888"}
```