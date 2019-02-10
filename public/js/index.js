/**
 * @version 1.0
 */

(function ($) {
  "use strict"; // Start of use strict

  // console.log($(window).width() < 992);
  // if ($(window).width() < 992) {
  //   $('#mainNav').addClass("fixed-top");
  // }

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').stop().animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 65
  });

  // $(window).scroll(function () {
  //   if ($(window).width() < 992) {

  //     $('#mainNav').addClass("fixed-top");
  //   } else {

  //     if ($(this).scrollTop() > 24) {
  //       $('#mainNav').addClass("fixed-top");
  //       $('#navtop').attr("style", "margin-bottom:76px;");
  //     } else {
  //       $('#mainNav').removeClass("fixed-top");
  //       $('#navtop').attr("style", "");
  //     }
  //   }
  // });

  // center of the map
  var center = [-33.4525, -70.6886];

  // Create the map


  var map = L.map('map').setView([-33.4525, -70.6886], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([-33.4525, -70.6886]).addTo(map)
    .bindPopup('Marcador de Ejemplo usando OpenStreetMaps.')
    .openPopup();

  // add a marker in the given location
  L.marker(center).addTo(map);


})(jQuery); // End of use strict


