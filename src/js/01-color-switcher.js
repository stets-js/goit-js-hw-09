function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const headHTML = document.querySelector('head');

function disabledStopBtn() {
  stopBtn.disabled = true;
}
disabledStopBtn();

startBtn.addEventListener('click', bgChange);

function bgChange() {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  startBtn.disabled = true;
  stopBtn.disabled = false;
}
let int = setInterval(bgChange, 1000);

stopBtn.addEventListener('click', stopBgChange);

function stopBgChange() {
  clearInterval(int);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}
