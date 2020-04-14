$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var firstnameInput = $("input#form_name");
  var lastnameInput = $("input#form_lastname");
  var emailInput = $("input#form_email");
  var passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      first_name: firstnameInput.val().trim(),
      last_name: lastnameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    //console.log(userData)
    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData);
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(Employer) {
    $.post("/api/createEmployer", Employer)
      .then(function(data) {
        console.log(data)
        $('.modal-body').empty();
        $('#signupDetailLongTitle').text("Registration Complete!");
        $('.modal-body').append(`<hr>${data.first_name} ${data.last_name}`);
        $('.modal-body').append(` Your user ID is: ${data.email}`);
        

        $("#signupDetail").modal('show');
        //window.location.replace("/login");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);

      $(document).on("click", "#signupBtn", function () {
        
        //console.log(index);      
        window.location.replace("/login");
        
      });

      $('#signupDetail').on('hidden.bs.modal', function () {
        window.location.replace("/login");
    });
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
