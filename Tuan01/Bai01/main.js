function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const guessBtn = document.querySelector(".guessBtn");
const scoreNumber = document.querySelector(".scoreNumber");
const guessNumber = document.querySelector(".guessNumber");
const message = document.querySelector(".message");
guessBtn.addEventListener("click", function () {
  if (parseInt(scoreNumber.innerHTML) !== 0) {
    var secretNumber = randomNumber();
    if (secretNumber === guessNumber) {
      scoreNumber.innerHTML = parseInt(scoreNumber.innerHTML) + 5;
      message.innerHTML = `Bạn đã đoán đúng số bí ẩn ${secretNumber}, bạn được cộng 5 điểm`;
      message.style.color = "green";
      message.style.fontSize = "18px";
    } else {
      scoreNumber.innerHTML = parseInt(scoreNumber.innerHTML) - 5;
      message.innerHTML = `Bạn đã đoán sai số bí ẩn ${secretNumber}, bạn bị trừ 5 điểm`;
      message.style.color = "red";
      message.style.fontSize = "18px";
    }
  } else {
    alert("Bạn đã hết điểm vui lòng chọn Again để chơi tiếp");
  }
});

const againBtn = document.querySelector(".againBtn");
againBtn.addEventListener("click", function () {
  scoreNumber.innerHTML = 20;
  guessNumber.value = "";
  message.innerHTML = `Mời bạn đoán số!`;
  message.style.color = "black";
  message.style.fontSize = "16px";
});
