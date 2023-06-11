function start_game() {
  object.classList.toggle("start");
  score = 0;
  document.title = "Score: 0";
  background_sound.play();
  background_sound.loop();
}
function finish_game() {
  alert(`You lose! Score ${score}`);
}
function miss(event) {
  if (event.target.id == "area") {
    score--;
    hit_sound.currentTime = 0;
    miss_sound.play();
    document.title = `Score ${score}`;
    if (score <= 0) {
      finish_game();
    }
  }
}

function hit() {
  score++;
  document.title = `Score ${score}`;

  object.classList.remove("start");
  void object.offsetWidth;
  object.classList.add("start");

  let random_offset = Math.floor(Math.random() * 520);
  object.style.left = `${random_offset}px`;
  hit_sound.currentTime = 0;
  hit_sound.play();
}
let object = document.querySelector("#object");
let score = 0;

const hit_sound = new Audio("sounds/hit.wav");
const miss_sound = new Audio("sounds/miss.wav");
const background_sound = new Audio("sounds/background.wav");
