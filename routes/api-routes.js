/*
- get all gigs
- get gigs by zipcode
- save employer info
- save employee info
- save gig information
*/

// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // Authentification Routes
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
      });
    }
  });

  // get all the gigs
  app.get("/api/getGigs", function(req, res) {
    db.gigs
      .findAll()
      .then((gigs) => {
        res.json(gigs);
      })
      .catch(console.error);
  });

  // get all the gigs that matches user's zipcode
  app.get("/api/getGigsByZipCode/:zipcode", function(req, res) {
    db.gigs
      .findAll({ where: { zipcode: req.params.zipcode } })
      .then((gigs) => {
        res.json(gigs);
      })
      .catch(console.error);
  });

  // save new gig
  app.post("/api/createGig", function(req, res) {
    db.gigs
      .create({
        employer_id: req.body.employer_id,
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        volunteer: req.body.volunteer,
        pay: req.body.pay,
        recurring_gig: req.body.recurring_gig,
        street_address: req.body.street_address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        completion_date: req.body.completion_date,
        laboring_hours: req.body.laboring_hours,
        assigned_to_id: req.body.assigned_to_id,
      })
      .then((newGig) => {
        res.json(newGig);
      });
  });
};

/*
- get all gigs
- get gigs by zipcode

- save employer info
- save employee info
- save gig information
*/
