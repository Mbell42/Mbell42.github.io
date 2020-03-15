// Grabbing Dependencies
const path = require("path");

// Routing
module.exports = (app) => {
    // HTML GET routes
    app.get("/notes/", (request,result) => {
        result.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("*", (request, result) => {
    result.sendFile(path.join(__dirname, "../public/index.html"));
    });
};
