/*eslint no-console: 0*/
"use strict";

const express = require("express");
const app = express();
const http = require("http");
const port = process.env.PORT || 3000;

http.createServer(function (req, res) {
	res.writeHead(200, {
		"Content-Type": "text/plain"
	});
	res.end("Hello Flights\n");
}).listen(port);

console.log("Server listening on port %d", port);

app.get("/", (request, response) => {
	response.send("Hello Flights!");
});