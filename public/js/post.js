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



});*/
