// Counter
let countDownDate = new Date("Dec 31, 2025 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;

  if (dateDiff <= 0) {
    clearInterval(counter);
    document.querySelector(".Days").innerHTML = "00";
    document.querySelector(".Hours").innerHTML = "00";
    document.querySelector(".Minutes").innerHTML = "00";
    document.querySelector(".Seconds").innerHTML = "00";
    return;
  }

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  document.querySelector(".Days").innerHTML = days < 10 ? "0" + days : days;

  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.querySelector(".Hours").innerHTML = hours < 10 ? "0" + hours : hours;

  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".Minutes").innerHTML =
    minutes < 10 ? "0" + minutes : minutes;

  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".Seconds").innerHTML =
    seconds < 10 ? "0" + seconds : seconds;
}, 1000);

// Count Stats
let nums = document.querySelectorAll(".counter .number");
let counternum = document.querySelector(".counter");
let started = false;

function startcount(el) {
  let goal = parseInt(el.dataset.goal);
  let duration = 2000; // المدة الكلية للعداد (2 ثانية)
  let startTime = null;

  function animateCount(timestamp) {
    if (!startTime) startTime = timestamp;
    let progress = timestamp - startTime;
    let current = Math.min((progress / duration) * goal, goal);
    el.textContent = Math.floor(current);

    if (current < goal) {
      requestAnimationFrame(animateCount);
    }
  }

  requestAnimationFrame(animateCount);
}

// Fill Content
let section = document.querySelector(".Our-Skills");
let spans = document.querySelectorAll(".projress span");
let filled = false;

// Scroll Event
window.onscroll = function () {
  // Count Stats
  if (window.scrollY >= counternum.offsetTop - window.innerHeight / 2) {
    if (!started) {
      nums.forEach((num) => startcount(num));
      started = true;
    }
  }

  // Fill Content
  if (window.scrollY >= section.offsetTop - window.innerHeight / 2) {
    if (!filled) {
      console.log("Reached Section Three");
      spans.forEach((span) => {
        span.style.width = span.dataset.width;
      });
      filled = true;
    }
  }
};
