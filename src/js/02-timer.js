import flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/material_blue.css';
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

startBtn.setAttribute('disabled', true);

flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    }
    startBtn.removeAttribute('disabled');
  },
});

// CONVERT

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return `${value}`.padStart(2, 0);
}

startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
  interval = setInterval(counter, 1000);
}

function counter() {
  startBtn.setAttribute('disabled', true);
  const targetDate = new Date(input.value);
  if (targetDate.getTime() > new Date().getTime()) {
    const leftTime = convertMs(targetDate.getTime() - new Date().getTime());

    timerDays.textContent = addLeadingZero(leftTime.days);
    timerHours.textContent = addLeadingZero(leftTime.hours);
    timerMinutes.textContent = addLeadingZero(leftTime.minutes);
    timerSeconds.textContent = addLeadingZero(leftTime.seconds);
  } else {
    clearInterval(interval);
  }
}
