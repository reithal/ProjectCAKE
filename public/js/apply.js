$(document).ready(function () {
  // Getting references to our form and input
  var applyForm = $("form.apply");

  var emailInput = $("input#form-email");
  var firstNameInput = $("input#form-name");
  var lastNameInput = $("input#form-lastname");
  var phoneInput = $("input#form-phone");
  var messageInput = $("input#form-message");

  // When the signup button is clicked, we validate the email and name are not blank
  applyForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      first_name: firstNameInput.val().trim(),
      last_name: lastNameInput.val().trim(),
      email: emailInput.val().trim(),
      phone: phoneInput.val().trim(),
      qualifiers: messageInput.val()
    };

    if (!userData.email || !userData.firstName) {
      return;
    }
    // If we have an name and email, run the applyGig function
    applyGig(userData);
    //TODO: UPDATE THIS
    firstNameInput.val("");
    lastNameInput.val("");
    phoneInput.val("");
    messageInput.val("");
    emailInput.val("");
  });

  // Does a post to the applyGig route. If successful, we are redirected to the gigs page
  // Otherwise we log any errors
  function applyGig(applicant) {
    $.post("/api/createApplicant", applicant)
      .then(function(data) {
        window.location.replace("/gigs");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(applyErr);
  }

  console.log("loaded apply.");

  function applyErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});