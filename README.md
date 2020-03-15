# 11_Note-Taker

This is my eleventh homework project.

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.   The application frontend has already been created, it's your job to build the backend and connect the two.   The following HTML routes should be created:   GET /notes - Should return the notes.html file.   GET * - Should return the index.html file     The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.   The following API routes should be created:   GET /api/notes - Should read the db.json file and return all saved notes as JSON.   POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.   DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

Instructions:
------------
Instructions are located in the readme.md file in the root folder of the hw assignment repository: 'https://ucsd.bootcampcontent.com/UCSD-Coding-Bootcamp/UCSD-SD-FSF-PT-12-2019-U-C/blob/master/11-express/02-Homework/README.md'.


Resources used:
------------
- GitBash
- GitHub
- node.js
- node.js modules:
    - express

Progress:
------------
2020.03.14_2022 - Initial commit. Set up folder structure and imported initial starting point from 'https://ucsd.bootcampcontent.com/UCSD-Coding-Bootcamp/UCSD-SD-FSF-PT-12-2019-U-C/tree/master/11-express/02-Homework'.

2020.03.14_2025 - Added empty'server', 'routes_api', and 'routes_html' .js files. 

2020.03.14_2233 - For 'server.js', added dependencies, set up express, opened the initial port, and set up paths to route files in develop/routes.

2020.03.14_1045 - For 'server.js', I configured express to parse data, and added a listener to start the server when the port is accessed.  For 'routes_html.js', I added dependencies, and set up routing with GET routes.

2020.03.14_1048 - For 'routes_html.js', I corrected both GET routes, correcting '_dirname' to '__dirname', and correcting file name of the GET route pointing to 'notes.html'.

2020.03.14_2258 - For 'routes_api.js', I added dpendencies, and set up mostly empty function for routing. Next I will  research 'try' and 'catch'.

2020.03.14_2319 - For 'routes_api.js', I set up 'try' and 'catch' functions.  I then ran npm install, creating package-lock.json.

2020.03.14_2320 - For 'routes_api.js', I corrected the path for the dependency 'data'.

2020.03.14_2332 - For 'routes_api.js', I completed 'READ' GET request, and then completed 'DELETE' GET request.

2020.03.14_2335 - For 'routes_api.js', I corrected the path for 'fs.writeFile'.  I then corrected a couple spelling errors, and added console logs for user visibility.

2020.03.14_2341 - For 'routes_api.js', I completed 'POST' GET request, and then reviewed my .js files.

2020.03.14_2345 - For 'server.js', I corrected and finished adding the listener.