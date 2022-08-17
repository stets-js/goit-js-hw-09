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
  try {
    timer = setInterval(() => {
      document.body.style.backgroundColor = `${getRandomHexColor()}`;
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
  } catch {
    alert('Error: Background color change has broken');
  }
}

stopBtn.addEventListener('click', stopBgChange);

function stopBgChange() {
  try {
    clearInterval(timer);
    startBtn.disabled = false;
    stopBtn.disabled = true;
  } catch {
    alert('Error: First press "START"');
  }
}
