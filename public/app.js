const images = [
  {
    path: "pngwing.com (1).png",
  },
  {
    path: "pngwing.com (2).png",
  },
];

const colors = ["red", "yellow", "pink"];
const emojis = ["⭐️", "🤩", "😇", "🥴", "🫣", "🥰"];

function createFirework() {
  const firework = document.createElement("div");
  firework.classList.add("firework");
  firework.style.left = Math.random() * 100 + "%";
  firework.style.top = Math.random() * 100 + "%";
  firework.style.backgroundImage = `url("${
    images[Math.floor(Math.random() * images.length)].path
  }")`;
  document.querySelector(".fireworks-container").appendChild(firework);
  setTimeout(() => {
    firework.remove();
  }, 4000);
}

setInterval(() => {
  createFirework();
}, 200);

function createBalloon() {
  const balloonContainer = document.querySelector(".balloon-container");
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");

  // Set random position and speed for each balloon
  const randomPosition = Math.random() * 100; // Adjust as needed
  const randomSpeed = Math.random() * 10 + 5; // Adjust as needed
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  balloon.style.bottom = "0";
  balloon.style.left = `${randomPosition}%`;
  balloon.style.animationDuration = `${randomSpeed}s`;
  balloon.style.backgroundColor = randomColor;

  balloonContainer.appendChild(balloon);
}

// Create multiple balloons
for (let i = 0; i < 10; i++) {
  createBalloon();
}

const touchResponse = () => {
  document.addEventListener("click", (event) => {
    let x = event.pageX;
    let y = event.pageY;

    let body = document.querySelector("body");
    let star = document.createElement("span");
    star.classList.add("star");
    star.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    star.style.left = x + "px";
    star.style.top = y + "px";
    body.appendChild(star);
    setTimeout(() => {
      star.remove();
    }, 3000);
  });
};

touchResponse();
