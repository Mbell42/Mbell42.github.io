// Grabbing Dependencies
const fs = require("fs");
const data = require("../db/db.json");

// Routing
module.exports = (app) => {
    // API GET routes
    app.get("/api/notes", (request,result) => {
        // READ from the db
        fs.readFile("./db/db.json", "utf-8", (err, notes) => {
            if (err) throw (err);
            let notesParsed;
            // notes must be an array; if it is not an array, and
            //can not be converted into one, throw an error
            try {
                notesParsed = [].concat(JSON.parse(notes));
            } catch (err) {
                notesParsed = [];
            }
            return result.join(notesParsed)
        });
    });

        // DELETE  from the db
        app.delete("/api/notes/:id", (request, result) => {
            let noteId = request.params.id;
            console.log("noteId: ", noteId);
            
            fs.readFile("./db/db.json", "utf-8", (err, response) => {
                if (err) throw (err);
                const allNotes = JSON.parse(response);
                const newNotes = allNotes.filter((note) => note.id != noteId);
                fs.writeFile("./db/db.json", JSON.stringify(newNotes, null, 2), (err) => {
                    if (err) throw (err);
                    result.json(true);
                    console.log("Note has been deleted successfully");
                    
                });
            });
        });

        // Post to the db
        app.post("./api/notes", (request, result) => {
            console.log(data, "Adding New Note", request.body);
            // Read from the JSON file
            fs.readFile("./db/db.json", "utf-8", (err, response) => {
                // Convert to JSON
                let allNotes = JSON.parse(response);
                console.log("New Note: ", request.body, allNotes);
                allNotes.push(request.body);
                // Update with new note
                fs.writeFile("./db/db.json", JSON.stringify(allNotes), (err) => {
                    if (err) throw (err);
                    result.json(allNotes);
                    console.log("New Note has been added successfully: ", allNotes);
                });
            });
        });
};