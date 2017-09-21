//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Google Map Skin - Get more at http://snazzymaps.com/
var lon = 44.425853, lat = 8.862941, loc = new google.maps.LatLng(lon, lat);

var myOptions = {
    zoom: 15,
    center: loc,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: false,
    styles: [{"featureType":"water","stylers":[{"color":"#009BC2"},{"visibility":"on"}]},{"featureType":"landscape","stylers":[{"color":"#f2f2f2"}]},{"featureType":"road","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]}]
};

var map = new google.maps.Map(document.getElementById('map'), myOptions);

var marker = new google.maps.Marker({
      position: loc,
      map: map,
      url: 'https://www.google.it/maps/dir//Talent+Garden,+Via+Melen,+77,+16152+Genova/@44.4261403,8.8612834,17z/data=!4m12!1m3!3m2!1s0x0:0x376b6c09b868a248!2sTalent+Garden!4m7!1m0!1m5!1m1!1s0x12d340c938b186f1:0x376b6c09b868a248!2m2!1d8.86248!2d44.425318'
   });

google.maps.event.addListener(marker, 'click', function() {
  window.location.href = marker.url;
});