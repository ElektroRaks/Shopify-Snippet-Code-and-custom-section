$(".option").hover(function () {
  if ($(window).width() > 749) {
    $(".option").removeClass("active");
    $(this).addClass("active");
  }
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    //Basic Speeds
    slideSpeed: 200,
    paginationSpeed: 800,

    //Autoplay
    autoPlay: true,
    goToFirst: false,
    goToFirstSpeed: 1000,

    // Navigation
    navigation: true,
    nav: true,
    navigationText: ["<span>‹</span>", "<span>›</span>"],
    pagination: false,
    paginationNumbers: true,

    // Responsive
    responsive: true,
    items: 1,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [980, 1],
    itemsTablet: [768, 1],
    itemsMobile: [479, 1],
  });
});

$(document).ready(function () {
  $(".owl-carousel-tabs").owlCarousel({
    //Basic Speeds
    slideSpeed: 200,
    paginationSpeed: 800,

    //Autoplay
    autoPlay: true,
    goToFirst: false,
    goToFirstSpeed: 1000,

    // Navigation
    navigation: true,
    nav: true,
    navigationText: ["<span>‹</span>", "<span>›</span>"],
    pagination: false,
    paginationNumbers: true,

    // Responsive
    responsive: true,
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [980, 3],
    itemsTablet: [768, 2],
    itemsMobile: [479, 2],
  });
});

// tabs collection
function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent-cus");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks-cus");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("tab-cus-active").click();

// Function to reveal lightbox and adding YouTube autoplay
function revealVideo(div, video_id) {
  var video = document.getElementById(video_id).src;
  document.getElementById(video_id).src = video + "&autoplay=1"; // adding autoplay to the URL
  document.getElementById(div).style.display = "block";
}

// Hiding the lightbox and removing YouTube autoplay
function hideVideo(div, video_id) {
  var video = document.getElementById(video_id).src;
  var cleaned = video.replace("&autoplay=1", ""); // removing autoplay form url
  document.getElementById(video_id).src = cleaned;
  document.getElementById(div).style.display = "none";
}
