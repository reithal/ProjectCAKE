$(document).ready(function() {
  // get current loged in employer id
  var employerid = "";

  $.get("/api/user_data")
    .then(function(response) {
      employerid = response.id;
    }) // If there's an error, log the error
    .catch(console.error);

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
      // employerid: ,
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
      completion_date: completion_dateInput.val().trim(),
      employerid: employerid
    };

    if (
      !userData.title ||
      !userData.category ||
      !userData.street_address ||
      !userData.city ||
      !userData.state ||
      !userData.zipcode ||
      !userData.description ||
      !userData.laboring_hours ||
      !userData.completion_date ||
      !userData.employerid
    ) {
      return;
    }
    // If we have the required fields, run postGig function
    postGig(userData);
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function postGig(newGig) {
    $.post("/api/createGig", newGig)
      .then(function(data) {
        window.location.replace("/gigs"); //if you want it to keep posting gigs or /gigs to show all after creating one.
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
