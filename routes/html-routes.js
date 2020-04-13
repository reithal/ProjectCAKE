var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");
// Each of the below routes just handles the HTML page that the user gets sent to.
module.exports = function(app) {
  // index route loads..
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/gigs", function(req, res) {
    res.render("gigs");
  });

  app.get("/post", function(req, res) {
    res.render("post");
  });

  app.get("/apply", function(req, res) {
    res.render("apply");
  });

  app.get("/apply/:id", function(req, res) {
    res.render("apply", { id: req.params.id });
  });

  app.get("/volunteer", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/volunteer.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the post page
    if (req.user) {
      res.redirect("/post");
    }
    res.render("login");
  });
  app.get("/members", isAuthenticated, function(req, res) {
    res.render("members");
  });
}
