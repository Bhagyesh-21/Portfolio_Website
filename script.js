
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
  }


  function jumpToTime(seconds) {
    const video = document.getElementById("turfVideo");
    if (video) {
      video.currentTime = seconds;
      video.play();
    }
  }
