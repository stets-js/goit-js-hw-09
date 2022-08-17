function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

const disabledStopBtn = btn => (btn.disabled = true);

disabledStopBtn(stopBtn);

startBtn.addEventListener('click', bgChange);
let timer;

function bgChange() {
  timer = setInterval(() => {
    document.body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
  // startBtn.disabled = true;
  disabledStopBtn(startBtn);
  stopBtn.disabled = false;
}

stopBtn.addEventListener('click', stopBgChange);

function stopBgChange() {
  clearInterval(timer);
  startBtn.disabled = false;
  // stopBtn.disabled = true;
  disabledStopBtn(stopBtn);
}
