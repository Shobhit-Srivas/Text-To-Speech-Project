const img_arr = [
  "apple.jpg",
  "ball.jpg",
  "cat.jpg",
  "dog.jpg",
  "ellephant.jpg",
  "fish.jpg",
  "grapse.jpg",
  "hen.jpg",
  "ice-cream.jpg",
  "joker.jpg",
  "kite.png",
  "lemon.jpg",
  "mango.jpg",
  "nest.jpg",
  "owl.jpg",
  "peacock.jpg",
  "queen.jpg",
  "rabbit.jpg",
  "ship.jpg",
  "tiger.jpg",
  "umberala.jpg",
  "van.jpg",
  "watch.jpg",
  "xylophone.png",
  "yak.jpg",
  "zebra.jpg",
];
const text = document.getElementById("text");
const image = document.getElementById("image");
window.addEventListener("keypress", function (event) {
  let flag = 0;
  if (speechSynthesis) {
    let speech = new SpeechSynthesisUtterance();
    speech.language = "en-us";
    for (let l = 0; l < img_arr.length; l++) {
      if (event.key.toLowerCase() === img_arr[l].split(".")[0][0]) {
        flag = 1;
        temp = img_arr[l].split(".")[0][0];
        text.innerHTML = event.key.toUpperCase();
        speech.text = `${event.key} for ${img_arr[l].split(".")[0]}`;
        image.style.backgroundImage = `url(${img_arr[l]})`;
        image.style.backgroundSize = "cover";
      }
    }
    if (flag === 0) {
      speech.text = "Worng Text";
    }
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  }
});
