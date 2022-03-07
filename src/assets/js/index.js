$(document).ready(function () {
  $("li.active").removeClass("active");
  $('a[href="' + location.pathname + '"]')
    .closest("li")
    .addClass("active");
});


var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 1,
  navigation: true,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  dots: false,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  navText: [
    "<i class='fa fa-chevron-left nav'></i>",
    "<i class='fa fa-chevron-right nav'></i>",
  ],
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [5000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});
