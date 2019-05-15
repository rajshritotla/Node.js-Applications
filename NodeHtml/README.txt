Serving up HTML with NodeJS
In this exercise, am going serve back an HTML file to the client.
Please follow these instructions:
In your favorite text editor, create a new file called server.js.
Run npm init -y
Add express as a dependency (npm install -g --save express)
Put the following code into that file:
 const express = require("express");
 const app = express();

 app.get("/", (request, response) => {
 	response.sendFile(__dirname + 'index.html');
 });

 app.listen(8000, () => {
 	console.log("Server listening on port 8000");
 });
 
Create your HTML file, 'index.html'. Put that in the same folder that contains server.js
  <html>this is the smallest HTML file ever...</html>
Launch the server, using node server.js