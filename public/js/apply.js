$(document).ready(function () {
  // Getting references to our form and input
  var applyForm = $("form.apply");

  var emailInput = $("input#form_email");
  var firstNameInput = $("input#form_name");
  var lastNameInput = $("input#form_lastname");
  var phoneInput = $("input#form_phone");
  var messageInput = $("textarea#form_message");
  var applyId = $('#form_applyId').data("id");

  // When the apply button is clicked, we validate the email and name are not blank
  applyForm.on("submit", function(event) {
    event.preventDefault();
    if(!messageInput) {messageInput = ""};
    //stripping dashes since its stored as BigInt
    const phone = phoneInput.val().replace(/-/g, "");
    
    var userData = {
      first_name: firstNameInput.val().trim(),
      last_name: lastNameInput.val().trim(),
      email: emailInput.val().trim(),
      phone: phone,
      qualifiers: messageInput.val()
    };
    

   
    if (!userData.email || !userData.first_name) {
      console.log("something went wrong.")
      return;
    }
    
    // If we have an name and email, run the applyGig function
    applyGig(userData);
    firstNameInput.val("");
    lastNameInput.val("");
    phoneInput.val("");
    messageInput.val("");
    emailInput.val("");
  });

  $.get("/api/getGig/"+applyId).then(function (response) {

    $("#form_applyId").val(`${response.title} with ${response.Employer.first_name} ${response.Employer.last_name}`);

  })// If there's an error, log the error
    .catch(function (err) {
      console.log(err);
    });


  // Does a post to the applyGig route. If successful, we are redirected to the gigs page
  // Otherwise we log any errors
  function applyGig(applicant) {
    var newAppID;
    $.post("/api/createApplicant", applicant)
      .then(function(data) {
        console.log(data)
         newAppID = {
          assigned_to_id: data.id} ;

        alert("Application posted succesfully.");

        // If there's an error, handle it by throwing up a bootstrap alert
      }).then(function(data) {
        console.log(newAppID)
        $.put(`/api/updateGig/${applyId}`, newAppID )
        window.location.replace("/gigs");
      })
      .catch(applyErr);
  }

  function applyErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});