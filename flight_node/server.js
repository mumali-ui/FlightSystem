/*eslint no-console: 0*/
"use strict";

var http = require("http");
var port = process.env.PORT || 3000;

http.createServer(function (req, res) {
	res.writeHead(200, {
		"Content-Type": "text/plain"
	});
	res.end("Hello Flights\n");
}).listen(port);

console.log("Server listening on port %d", port);

//const express = require("express");
//const app = express();

// app.use(express.json());

// app.get("/", (request, response) => {
// 	response.send("Hello Flights!");
// });

// app.get("/departure/:to", (request, response) => {
// 	if (request.params.to === "HOME") {
// 		return response.send("Harry,start the engines!");
// 	}
// 	response.send("Sorry,no food, no flight!");
// });

// app.post("/flighStatus", (request, response) => {
// 	if (request.body.departure === "NCE") {
// 		return response.json({
// 			flightStatus: "strike"
// 		});
// 	}
// 	response.json({
// 		flightStatus: "onTime"
// 	});
// });

// app.get("/flightAnnouncement", (request, response, next) => {
// 		console.log("Captain: Fredriiiick!");
// 		next();
// 	},
// 	(request, response) => {
// 		console.log("Co-pilot: Why is it always me???");
// 		response.send("Hello, this is your first officer speaking!");
// 	}
// );

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
// 	console.log(`Expecting troubles at port ${port}`);
// });