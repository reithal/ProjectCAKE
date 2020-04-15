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

  // post gig, saves employer info and gig info
  app.post("/api/post", (req, res) => {
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let phone = req.body.phone;

    db.Employer.create({
      first_name,
      last_name,
      email,
      phone,
    })
      .then((newEmployer) => {
        res.json("Employer added!");
      })
      .catch((err) => console.log(err));

    db.Gig.create({
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
        res.json("Gig was created!");
      })
      .catch((err) => console.log(err));
  });

  // create employer
  app.post("/api/createEmployer", (req, res) => {
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let phone = req.body.phone;
    let password = req.body.password;

    db.Employer.create({
      first_name,
      last_name,
      email,
      phone,
      password,
    })
      .then((newEmployer) => {
        res.json({
          first_name: newEmployer.first_name,
          last_name: newEmployer.last_name,
          email: newEmployer.email,
          id: newEmployer.id,
        });
      })
      .catch((err) => console.log(err));
  });

  // get employers information
  app.get("/api/getEmployers", (req, res) => {
    db.Employer.findAll()
      .then((employers) => res.json(employers))
      .catch((err) => console.log(err));
  });

  // get employer information by id
  app.get("/api/getEmployer/:id", (req, res) => {
    db.Employer.findOne({ where: { id: req.params.id } })
      .then((employer) => res.json(employer))
      .catch((err) => console.log(err));
  });

  // create applicant
  app.post("/api/createApplicant", (req, res) => {
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let phone = req.body.phone;
    let qualifiers = req.body.qualifiers;

    db.Applicant.create({
      first_name,
      last_name,
      email,
      phone,
      qualifiers,
    })
      .then((newApplicant) => {
        res.json(newApplicant);
      })
      .catch((err) => console.log(err));
  });

  // get applicants information
  app.get("/api/getApplicants", (req, res) => {
    db.Applicant.findAll()
      .then((applicants) => res.json(applicants))
      .catch((err) => console.log(err));
  });

  // get applicant information by id
  app.get("/api/getApplicant/:id", (req, res) => {
    db.Applicant.findOne({ where: { id: req.params.id } })
      .then((applicant) => res.json(applicant))
      .catch((err) => console.log(err));
  });

  // get all the gigs
  app.get("/api/getGigs", function(req, res) {
    db.Gig.findAll({ include: [db.Employer] })
      .then((gigs) => res.json(gigs))
      .catch(console.error);
  });

  // get all the gigs that are checked Volunteer
  app.get("/api/getGigs", function(req, res) {
    db.Gig.findAll({ where: { volunteer: "1" }, include: [db.Employer] })
      .then((gigs) => res.json(gigs))
      .catch(console.error);
  });

  // get all the gigs that are checked Recurring Gig
  app.get("/api/getGigs", function(req, res) {
    db.Gig.findAll({ where: { recurring_gig: "1" }, include: [db.Employer] })
      .then((gigs) => res.json(gigs))
      .catch(console.error);
  });

  // get gig by id
  app.get("/api/getGig/:id", function(req, res) {
    db.Gig.findOne({ where: { id: req.params.id }, include: [db.Employer] })
      .then((gig) => res.json(gig))
      .catch(console.error);
  });

  // get all the gigs that match the user's zipcode
  app.get("/api/getGigsByZipCode/:zipcode", function(req, res) {
    db.Gig.findAll({
      include: [db.Employer],
      where: { zipcode: req.params.zipcode },
    })
      .then((gigs) => res.json(gigs))
      .catch(console.error);
  });

  // save gig
  app.post("/api/createGig", (req, res) => {
    db.Gig.create({
      EmployerId: req.body.employerid,
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
      .then((newGig) => res.json("Gig was created!"))
      .catch((err) => console.log(err));
  });

  // update gig
  app.put("/api/updateGig/:id", (req, res) => {
    db.Gig.findOne({ where: { id: req.params.id } })
      .then((gig) => {
        gig
          .update({ assigned_to_id: req.body.assigned_to_id })
          .then((updatedGig) => res.json("Gig was updated!"))
          .catch(console.error);
      })
      .catch(console.error);
  });
};
