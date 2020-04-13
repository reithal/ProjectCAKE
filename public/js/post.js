$(document).ready(function() {
  // Getting references to our form and input
  var postForm = $("form.gigForm");
  var titleInput = $("#title");
  var categoryInput = $("#category");
  var streetAddressInput = $("#street_address");
  var cityInput = $("#city");
  var stateInput = $("#state");
  var zipcodeInput = $("#zipcode");
  var descriptionInput = $("#description");
  var payInput = $("#pay");
  var laboring_hoursInput = $("#laboring_hours");
  var completion_dateInput = $("#completion_date");
  // When the signup button is clicked, we validate the email and password are not blank
  postForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      title: titleInput.val().trim(),
      category: categoryInput.val().trim(),
      volunteer: $("#volunteer").is(":checked"),
      recurring_gig: $("#recurring_gig").is(":checked"),
      street_address: streetAddressInput.val().trim(),
      city: cityInput.val().trim(),
      state: stateInput.val().trim(),
      zipcode: zipcodeInput.val().trim(),
      description: descriptionInput.val().trim(),
      pay: payInput.val().trim(),
      laboring_hours: laboring_hoursInput.val().trim(),
      completion_date: completion_dateInput.val().trim()
    };
      console.log(userData);
      if (!userData.title ||
        !userData.category ||
        !userData.street_address ||
        !userData.city ||
        !userData.state ||
        !userData.zipcode ||
        !userData.description ||
        !userData.laboring_hours ||
        !userData.completion_date) {
        return;
      }
      // If we have the required fields, run postGig function
      postGig(
        userData.title,
        userData.category,
        userData.volunteer,
        userData.recurring_gig,
        userData.street_address,
        userData.city,
        userData.state,
        userData.zipcode,
        userData.description,
        userData.pay,
        userData.laboring_hours,
        userData.completion_date
      );
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function postGig(
      title, 
      category, 
      volunteer, 
      recurring_gig, 
      street_address, 
      city, 
      state, 
      zipcode, 
      description, 
      pay, 
      laboring_hours, 
      completion_date) {
      $.post("/api/createGig", {
        title: title,
        category: category,
        volunteer: volunteer,
        recurring_gig: recurring_gig,
        street_address: street_address,
        city: city,
        state: state,
        zipcode: zipcode,
        description: description,
        pay: pay,
        laboring_hours: laboring_hours,
        completion_date: completion_date
      }).then(function(data) {
          window.location.replace("/gigs"); //if you want it to keep posting gigs or /gigs to show all after creating one.
          // If there's an error, handle it by throwing up a bootstrap alert
        }).catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });