$(document).ready(function () {

  $('.nav-item').removeClass("active");
  $('#navGig').addClass("active");

  // Getting references to our form and inputs

  $.get("/api/getGigs").then(function (response) {

    renderResults(response);

  })// If there's an error, log the error
    .catch(function (err) {
      console.log(err);
    });

  // Zip Search Button
  $('#btnZipSearch').on("click", function (e) {
    e.preventDefault();
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
      $('#errorSpot').append(`Please enter a zip code.`)
      errMsgClr();
    };
    
  });

  // Clears input text box on click.
  $('#zipInput').mousedown(function () {
    $(this).val("");
  });

});

var gigObjects =[];

var errMsgTmOut;
function errMsgClr() { 
    errMsgClear = setTimeout(() => {$('#errorSpot').empty();}, 3000); 
  };

function renderResults(gigs) {
  gigObjects =[]; //empty the array var for modals
  $('#cardContainer').empty(); // Clear the container if populated.
      // DEBUG
      console.log(gigs.length);
    if (gigs.length > 0) {

      for (i = 0; i < gigs.length; i++) {
      var typeOfJob;
      console.log(gigs[i].volunteer);
      if(gigs[i].volunteer) {
        typeOfJob = "Volunteer Job";
      } else {
        typeOfJob = `Willing to Pay $${gigs[i].pay}`;
      }
      var avatar = `https://api.adorable.io/avatars/100/${gigs[i].Employer.id}@adorable.io.png`;
      var templateString = `<div class="col-lg-3 col-md-4 col-sm-6 mb-4" data-toggle="modal" data-target="#gigDetail">`;
      templateString += ` <div class="clearfix detailBtn card" data-id="${gigs[i].id}" text-center d-block">`;
      templateString += ` <img id="cardImg" class="card-img-top img-responsive" src="${avatar}" alt="Avatar">`;
      templateString += ` <div class="card-body">`;
      templateString += ` <h4 class="card-header text-center">${gigs[i].title}</h4>`;
      templateString += ` <p class="card-title text-center category">${gigs[i].category}</p>`;
      templateString += ` <p class="card-text text-center category">${typeOfJob}</p></div></div></div>`;

      $('#cardContainer').append(templateString);
      gigObjects.push(gigs[i]);
    }
  } else {
    var noGigs = '<p class="d-flex m-1 p-2" id="noResults">No Gigs Found. Perhaps people need help in another area.</p>'

    $('#cardContainer').append(noGigs);
  }
};

$(document).on("click", ".detailBtn", function () {
  var index = $(this).data("id");
  if(gigObjects[index].volunteer) {
    typeOfJob = "Volunteer Job";
  } else {
    typeOfJob = `Willing to Pay $${gigObjects[index].pay}`;
  }
  console.log(index);
  $('.modal-body').empty();
  $('#applyBtn').data("id", index);
  $('#gigDetailLongTitle').text(gigObjects[index].title);
  $('.modal-body').append(`<strong>${gigObjects[index].category}</strong>`);
  $('.modal-body').append(`<br>${gigObjects[index].description}`);
  $('.modal-body').append("<br>" + typeOfJob);
  $('.modal-body').append(`<hr><strong></strong>`);
  if (gigObjects[index].phone) {
    $('.modal-body').append("<br>");
  };
 
  $(document).on("click", "#applyBtn", function () {
    var index = $(this).data('id');  
    //console.log(index);      
       window.location = '/apply?id=' + index;
    
  });
  // Location(gigObjects[index].name.trim() + gigObjects[index].street.trim() + gigObjects[index].postal_code);
});






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

