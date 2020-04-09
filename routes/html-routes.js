var path = require("path");

// Each of the below routes just handles the HTML page that the user gets sent to.
module.exports = function(app) {
  // index route loads..
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/gigs", function(req, res) {
    res.render("gigs");
  });
};




// Requiring path to so we can use relative routes to our HTML files
//var path = require("path");

/*
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
};

*/

