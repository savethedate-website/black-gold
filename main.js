//Countdown text
// Set the date we're counting down to
var countDownDate = new Date("Dec 31, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="countdown"
  document.getElementById("countdownDays").innerHTML = days;
  document.getElementById("countdownHours").innerHTML = hours;
  document.getElementById("countdownMinutes").innerHTML = minutes;
  document.getElementById("countdownSeconds").innerHTML = seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

document.querySelector("#close").addEventListener("click", function () {
  document.querySelector("html").style = "overflow: visible";
  document.querySelector("body").style = "overflow: visible";

  $("html,body").animate(
    {
      scrollTop: $(".circle-section").offset().top,
    },
    "fast"
  );
  playAudio();
});

$("#close").on("click", function (e) {
  e.preventDefault();
});

$(window).on("beforeunload", function () {
  $(window).scrollTop(0);

  $("body").hide();
});

//Mute Unmute Music Background
var audio = document.getElementById("music");

function playAudio() {
  audio.play();
  document.getElementById("playButton").style.display = "inline";
  document.getElementById("pauseButton").style.display = "none";
}

function pauseAudio() {
  audio.pause();
  document.getElementById("playButton").style.display = "none";
  document.getElementById("pauseButton").style.display = "inline";
}

//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollTopBtn.classList.toggle("active", this.window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//radio button
function radioAttend() {
  document.getElementById("totalGuest").style.display = "inline";
  document.getElementById("br1").style.display = "inline";
  document.getElementById("br2").style.display = "inline";
}

function radioNotAttend() {
  document.getElementById("totalGuest").style.display = "none";
  document.getElementById("br1").style.display = "none";
  document.getElementById("br2").style.display = "none";
}

function radio1() {
  document.getElementById("guest1").style = "display: inline; margin-top:10px";
  document.getElementById("guest2").style.display = "none";
  document.getElementById("guest3").style.display = "none";
  document.getElementById("guest4").style.display = "none";
  document.getElementById("guest5").style.display = "none";
}

function radio2() {
  document.getElementById("guest1").style = "display: inline; margin-top:10px";
  document.getElementById("guest2").style = "display: inline; margin-top:10px";
  document.getElementById("guest3").style.display = "none";
  document.getElementById("guest4").style.display = "none";
  document.getElementById("guest5").style.display = "none";
}

// function radio3() {
//   document.getElementById("guest1").style = "display: inline; margin-top:10px";
//   document.getElementById("guest2").style = "display: inline; margin-top:10px";
//   document.getElementById("guest3").style = "display: inline; margin-top:10px";
//   document.getElementById("guest4").style.display = "none";
//   document.getElementById("guest5").style.display = "none";
// }

// function radio4() {
//   document.getElementById("guest1").style = "display: inline; margin-top:10px";
//   document.getElementById("guest2").style = "display: inline; margin-top:10px";
//   document.getElementById("guest3").style = "display: inline; margin-top:10px";
//   document.getElementById("guest4").style = "display: inline; margin-top:10px";
//   document.getElementById("guest5").style.display = "none";
// }

// function radio5() {
//   document.getElementById("guest1").style = "display: inline; margin-top:10px";
//   document.getElementById("guest2").style = "display: inline; margin-top:10px";
//   document.getElementById("guest3").style = "display: inline; margin-top:10px";
//   document.getElementById("guest4").style = "display: inline; margin-top:10px";
//   document.getElementById("guest5").style = "display: inline; margin-top:10px";
// }

//show bank number
function showCard() {
  document.getElementById("card-container").style.display = "block";
}

//copy bank number
function copyBank() {
  navigator.clipboard.writeText("510108111833");
}

$(document).ready(function () {
  $("form").submit(function () {
    Swal.fire({
      icon: "success",
      title: "Your RSVP have been submitted. Thank you",
      confirmButtonText: "OK",
    }).then(() => {
      $("#myForm")[0].reset();
      location.reload();
    });
  });
});

//Javascript for reveal transition
//common reveal options to create reveal animations
ScrollReveal({
  reset: false,
  duration: 2000,
  delay: 400,
  distance: "60px",
});

ScrollReveal().reveal(
  ".countdownContainer, .imgCircle, .quote, .gospel, .logo, .title-area, .iframe-container, .hashtag, .names, .wishes",
  {
    scale: 0.1,
    delay: 100,
    interval: 200,
  }
);

ScrollReveal().reveal(
  ".bride, .groom, .mass, .mogongoi, .rsvp-content, .chineseTea, .reception, .content-wish-container",
  {
    delay: 100,
    interval: 100,
    scale: 0.1,
    rotate: {
      x: 200,
      z: 200,
    },
  }
);

ScrollReveal().reveal(
  ".top-text, .photo, .name-text1, .fullname1, .born-text1, .parent-text1, .plus-text1, .bottom-text, .midImage, .video-text, .gift-content",
  { delay: 100, origin: "bottom", interval: 100 }
);

ScrollReveal().reveal(
  ".name-text2, .fullname2, .born-text2, .parent-text2, .plus-text2",
  { delay: 100, origin: "bottom", interval: 100 }
);
