$(document).ready(function() {
  // Getting references to our form and inputs
  var loginBtn = $("button#login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  $("#authError").hide();
  // When the form is submitted, we validate there's an email and password entered
  loginBtn.on("click", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    //console.log(userData);
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(function() {
        window.location.replace("/post");
        // If there's an error, log the error
      })
      .catch(function(err) {
        if (err.status === 401) {
          console.log("captured 401");
          $("#authError").show();
          $("#authErrorText").css("text-color", "red");
        }
        console.log(err);
      });
  }
});
