$(document).ready(function() {
  // Getting references to our form and inputs

  $.get("/api/getGigs").then(function(response) {
      
      // If there's an error, log the error

  var gigs = response;
 // console.log(gigs.length);
  if(gigs) {
  // DEBUG
  console.log(gigs.length);
  $('#cardContainer').empty(); // Clear the container if populated.

  for (i = 0; i < gigs.length; i++) {

    var templateString =`<div class="col-lg-3 col-md-4 col-sm-6 mb-4"> <div class="card data-id="${gigs[i].id}" h-100"> <a href="#"><img class="card-img-top" src="http://placehold.it/100" alt=""></a> <div class="card-body"> <h4 class="card-title"> <a href="#">${gigs[i].title}</a> </h4> <p class="card-text category">${gigs.category}</p></div></div></div>`
    
    $('#cardContainer').append(templateString);
  }
  } else {
    var noGigs = '<p>No Gigs Found</p>'
    $('#cardContainer').append(noGigs);
  } 
})
.catch(function(err) {
  console.log(err);
});

});
