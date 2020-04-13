$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $('.navbar-nav').append('<li><a class="navbar-brand" href="/logout">Logout </a>"</li>');
  $.get("/api/user_data").then(function(data) {
    
    $(".member-name").text(`${data.first_name} ${data.last_name}`);
  });
});
