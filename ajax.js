document.addEventListener("DOMContentLoaded", function() {

  document.querySelector(".step2").addEventListener("click", function() {
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/",
      method: "GET",
      data: "{ }",
      dataType: 'text'
    })
  });

  document.querySelector(".pingpong").addEventListener("click", function() {
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/pong",
      method: "GET",
      dataType: 'text'
    }).done(function(data) {
      console.log(data);
      e = document.createElement("div")
      e.innerHTML = data
      document.querySelector("#step3456").append(e)
    }).fail(function(data) {
      e = document.createElement("div")
      e.innerHTML = "Could not reach server."
      document.querySelector("#step3456").append(e)
    }).always(function(data) {
      e = document.createElement("div")
      e.innerHTML = "Request finished!"
      document.querySelector("#step3456").append(e)
    })

  })

  document.querySelector(".step7").addEventListener("click", function() {
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/count",
      method: "GET",
      dataType: 'text'
    }).done(function(data) {
      console.log(data);
      e = document.createElement("div")
      e.innerHTML = data
      document.querySelector("#step7").append(e)
    }).fail(function(data) {
      e = document.createElement("div")
      e.innerHTML = "Could not reach server."
      document.querySelector("#step7").append(e)
    }).always(function(data) {
      e = document.createElement("div")
      e.innerHTML = "Request finished!"
      document.querySelector("#step7").append(e)
    })

  })

  document.querySelector(".step8").addEventListener("click", function() {
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/time",
      method: "GET",
      dataType: 'text',
      data: '{ timezone: "Pacific/Honolulu" }'
    }).done(function(data) {
      console.log(data);
      e = document.createElement("div")
      e.innerHTML = data
      document.querySelector("#step8").append(e)
    }).fail(function(data) {
      e = document.createElement("div")
      e.innerHTML = "Could not reach server."
      document.querySelector("#step8").append(e)
    }).always(function(data) {
      e = document.createElement("div")
      e.innerHTML = "Request finished!"
      document.querySelector("#step8").append(e)
    })

  })

  document.querySelector(".step9").addEventListener("click", function() {
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/a_car",
      method: "GET",
      dataType: 'html'
    }).done(function(data) {
      console.log(data);
      e = document.createElement("ul")
      e.innerHTML = data
      document.querySelector("#step9").append(e)
    }).fail(function(data) {
      e = document.createElement("div")
      e.innerHTML = "Could not reach server."
      document.querySelector("#step9").append(e)
    }).always(function(data) {
      e = document.createElement("div")
      e.innerHTML = "Request finished!"
      document.querySelector("#step9").append(e)
    })

  })


});
