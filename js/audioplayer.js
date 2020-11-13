var myAudio = new Audio();
var playButton = $(".playButton");
var playing = false;
var posSlider = $(".timeSlider_inner");
var posSlider_outer = $(".timeSlider_outer");
var volSlider_outer = $(".volSlider_outer");
var volSlider_inner = $(".volSlider_inner");
var loaded = false;

$(document).ready(function () {
  playButton.click(audioManager);

  posSlider_outer[0].addEventListener("click", function (event) {
    setPos(event, this);
  });
  volSlider_outer[0].addEventListener("click", function (event) {
    setVol(event, this);
  });

  $(document)[0].addEventListener("scroll", function () {
    $(".alert").fadeOut();
  });

  myAudio.volume = 0.5;
});

function audioManager() {
  $(".alert").fadeOut();
  console.log("ping");
  if (!loaded) {
    //start loading wheel
    $(".playIcon").removeClass("active");
    $(".lds-dual-ring").addClass("active");
    console.log("audio NOT loaded");
    myAudio = new Audio(`./podcasts/${getTag()}.opus`);
    // myAudio = new Audio(`./podcasts/testMP3.mp3`);
    myAudio.load();
    console.log("audio loaded");

    myAudio.addEventListener("canplaythrough", loadedAudio);
    myAudio.addEventListener("timeupdate", setSliderVal);
    myAudio.addEventListener("ended", function () {
      playing = false;
      $(".playIcon").addClass("active");
      $(".pauseIcon").removeClass("active");
    });
  } else {
    if (!playing) {
      myAudio.play();
      playing = true;
      //change Icon
      $(".playIcon").removeClass("active");
      $(".pauseIcon").addClass("active");
    } else {
      myAudio.pause();
      playing = false;
      //change Icon
      $(".playIcon").addClass("active");
      $(".pauseIcon").removeClass("active");
    }
  }
}

function loadedAudio() {
  loaded = true;
  //set icon to pause
  $(".pauseIcon").addClass("active");
  $(".lds-dual-ring").removeClass("active");
  playing = false;
  audioManager();
}

function setSliderVal() {
  posSlider.css("width", `${(myAudio.currentTime / myAudio.duration) * 100}%`);
}

function setPos(e, el) {
  myAudio.currentTime =
    ((e.clientX - el.getBoundingClientRect().left) /
      el.getBoundingClientRect().width) *
    myAudio.duration;
}

function setVol(e, el) {
  myAudio.volume =
    (e.clientX - el.getBoundingClientRect().left) /
    el.getBoundingClientRect().width;

  volSlider_inner.css("width", `${myAudio.volume * 100}%`);

  console.log(myAudio.volume);
}

function getTag() {
  return $("body")[0].dataset.audio;
}
