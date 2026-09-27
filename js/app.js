document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("hideP").style.visibility = "hidden"
  document.getElementById("hideStart").style.visibility = "hidden"
});

function start() {
  document.getElementById("hideStart").style.visibility = "hidden"
  document.body.style.backgroundImage = "url('img/v4-460px-Green-Aura-with-Flies-Step-1.jpg')"
}

function playFart() {
  var audio = new Audio('apebble-fart-4-228244.mp3')
  audio.play()
}
