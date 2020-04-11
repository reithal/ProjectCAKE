$(document).ready(function () {
  // Getting references to our form and inputs

  $.get("/api/getGigs").then(function (response) {

    renderResults(response);

  })// If there's an error, log the error
    .catch(function (err) {
      console.log(err);
    });

  // Zip Search Button
  $('#btnZipSearch').on("click", function (event) {
    clearTimeout(errMsgTmOut);
    var zip = $('#zipInput').val();
    if (zip) {
      $.get(`/api/getGigsByZipCode/${zip}`).then((response)=>{
        renderResults(response);
      })// If there's an error, log the error
      .catch(function (err) {
        console.log(err);
      });
      
    } else {
      $('#errorSpot').empty()
      $('#errorSpot').append(`<em>Please enter a zip code.</em>`)
      errMsgClr();
    }
  });

});



var errMsgTmOut;
function errMsgClr() { 
    errMsgClear = setTimeout(() => {$('#errorSpot').empty();}, 3000); 
  };

function renderResults(gigs) {

  $('#cardContainer').empty(); // Clear the container if populated.
      // DEBUG
      console.log(gigs.length);
    if (gigs.length > 0) {

    

    for (i = 0; i < gigs.length; i++) {

      var templateString = `<div class="col-lg-3 col-md-4 col-sm-6 mb-4"> <div class="clearfix card data-id="${gigs[i].id}" text-center d-block"> <img id="cardImg" class="card-img-top img-responsive" src="https://api.adorable.io/avatars/100/${gigs[i].Employer.id}@adorable.io.png" alt=""><div class="card-body"> <h4 class="card-title text-center"> <a href="#">${gigs[i].title}</a> </h4> <p class="card-text text-center category">${gigs[i].category}</p></div></div></div>`;

      $('#cardContainer').append(templateString);
    }
  } else {
    var noGigs = '<p>No Gigs Found</p>'

    $('#cardContainer').append(noGigs);
  }
};

// NICE TO HAVE - get real pictures of people for profil
// async function getProfilePic() {
//   var image;
//   // return new Promise(async function(resolve, reject) {
//   await $.get("https://randomuser.me/api/?inc=picture").then( function (response) {
//       console.log(response.results[0].picture.large);
//       image = response.results[0].picture.large;

//     }).catch(err => console.log(err));
//   return image;
// };

