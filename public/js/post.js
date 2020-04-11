$(document).ready(function() {
  $("form").submit(function(e) {
      e.preventDefault();
      handleFormSubmit();
      
    console.log("Is working");
    //handleFormSubmit();//
  });
  //var $newPostInput = $("input.new-post");

  //Reference of Elements
 
  var $title = $("#title");
  var $description = $("#description");
  var $category = $("#category");
  var $volunteer = $("#volunteer");
  var $city = $("#city");
  var $pay = $("#pay");
  var $recurring_gig = $("#recurring_gig");
  var $street_address = $("#street_address");
  var $state = $("#state");
  var $zipcode = $("#zipcode");
  var $completion_date = $("#completion_date");
  var $laboring_hours = $("#laboring_hours");

  
  
  //Submit Form Function
  var handleFormSubmit = function(event) {
    var gigs = {
      title: $title.val().trim(),
      description: $description.val().trim(),
      category: $category.val().trim(),
      volunteer: $volunteer.val().trim(),
      city: $city.val().trim(),
      pay: $pay.val().trim(),
      recurring_gig: $recurring_gig.val().trim(),
      street_address: $street_address.val().trim(),
      state: $state.val().trim(),
      zipcode: $zipcode.val().trim(),
      completion_date: $completion_date.val().trim(),
      laboring_hours: $laboring_hours.val().trim(),
      complete: false
    };
    $.post("/api/createGig", gigs);
    //$newPostInput.val("");//
  };

  /*$(document).ready(function() {
    var $newPostInput = $("input.new-post");
    var $container = $(".post-container");
    $(document).on("submit", "#todo-form", insertTodo);



    
    
    
    
    
    function insertTodo(event) {
        event.preventDefault();
        var gigs = {
          text: $newPostInput.val().trim(),
          title: $title.val().trim(),
          description: $description.val().trim(),
          category: $category.val().trim(),
          volunteer: $volunteer.val().trim(),
          pay: $pay.val().trim(),
          recurring_gig: $recurring_gig.val().trim(),
          street_address: $street_address.val().trim(),
          state: $state.val().trim(),
          zipcode: $zipcode.val().trim(),
          completion_date: $completion_date.val().trim(),
          laboring_hours: $laboring_hours.val().trim(),
          complete: false
        };
    
        $.post("/api/createGig", gigs);
        $newItemInput.val("");


*/
});
