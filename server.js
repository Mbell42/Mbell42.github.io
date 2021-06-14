//DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();
// const creds = require("./config/config.js");
const cors = require("cors");

//MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

app.use(cors());

// For local contactForm testing
// const mailTo = creds.MAILGUN_TO;
// const mailFrom = creds.MAILGUN_FROM;
// const mailKey = creds.MAILGUN_KEY;
// const mailDomain = creds.MY_DOMAIN;

// for contactForm testing with Heorku
const mailTo = process.env.MAILGUN_TO;
const mailFrom = process.env.MAILGUN_FROM;
const mailKey = process.env.MAILGUN_KEY;
const mailDomain = process.env.MY_DOMAIN;

const mailgun = require("mailgun-js");
const DOMAIN = mailDomain;
console.log("contact form emails will be sent from: " + DOMAIN);


// When /send api is hit with the post method, send email form contact form
router.post("/send", (req, res) => {
  console.log("request: ", req.body);
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const text = req.body.message;
  const content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${text}`;
  console.log(`email content:  \n ${content}`);

  const mg = mailgun({apiKey: mailKey, domain: DOMAIN});
  const data = {
    from: mailFrom,
    to: mailTo,
    subject: "New Test Message from Contact Form",
    text: content
  };
  mg.messages().send(data, function (error, body) {
    if(error) {
      console.log(error);
    } else {
      console.log(body);
    }
  });
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

