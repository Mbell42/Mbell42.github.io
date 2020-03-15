// Grabbing Dependencies
const express = require("express");

// Setting up Express
const app = express();

// Setting up initial port
const PORT = process.env.PORT || 8080;

// Using Express to parse data
app.use(express.urlencoded( { extended: true}));
app.use(express.json());
app.use(express.static("public"));

// Router - this points the server to route files in /develop/route
require("./routes/routes_api")(app);
require("./routes/routes_html")(app);


// Listener to start server when port is accessed
app.listen(PORT, () => console.log('App is now listening on PORT: ' + PORT));

