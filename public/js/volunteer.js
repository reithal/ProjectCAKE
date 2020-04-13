$(document).ready(() => {
  let location = "";
  // let loading = false;

  // show loading screen when ajax request is sent
  $(document).ajaxSend(() => {
    $(".loading").show();
  });

  // search event when search button is click
  $(".search-bttn").click(() => {
    location = $(".location-input").val();
    searchEvents(location);
  });

  // search event when enter key is pressed
  $(".location-input").on("keypress", event => {
    location = event.target.value;

    if (event.key === "Enter") {
      searchEvents(location);
    }
  });

  // handle search s
  function searchEvents(location) {
    if (location) {
      let url = `https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?keywords=volunteer&t=Next+30+Days&include=links&app_key=dSgcPNSbCFTGkjzg&location=${location}`;

      $.ajax({
        url: url,
        method: "GET"
      }).then(response => {
        $(".loading").hide(); // hide loading screen

        let events = JSON.parse(response).events;

        if (events === null) {
          alert("No event found in this area please try again");
        } else {
          events = events.event; // target the events array

          console.log(events);

          events.map(event => {
            let listItem = `<div class="jumbotron"><h1 class="display-4">${event.title}</h1> <p class="lead">${event.city_name}</p><a class="btn btn-primary btn-lg" href="${event.url}" role="button" target="_blank">Learn more</a></div>`;

            $(".response").append(listItem);
          });
        }
      });
    } else {
      alert("please enter location");
    }
  }
});
