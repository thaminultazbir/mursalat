let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let dd = document.getElementById("dd");
let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let day_dot = document.querySelector(".day_dot");
let hr_dot = document.querySelector(".hr_dot");
let min_dot = document.querySelector(".min_dot");
let sec_dot = document.querySelector(".sec_dot");

let endDate = "06/30/2024 10:00:00"; //Exam Date
// date format mm/dd/yyyy

let x = setInterval(function () {
  let now = new Date(endDate).getTime();
  let countDown = new Date().getTime();
  let distance = now - countDown;

  // time calculation for days, Hours, Minutes, Seconds
  let d = Math.floor(distance / (1000 * 60 * 60 * 24));
  let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((distance % (1000 * 60)) / 1000);

  // output the result in element with ID
  days.innerHTML = d + "<br><span>Days</span>";
  hours.innerHTML = h + "<br><span>hours</span>";
  minutes.innerHTML = m + "<br><span>minutes</span>";
  seconds.innerHTML = s + "<br><span>seconds</span>";

  // animate stroke
  dd.style.strokeDashoffset = 250 - (250 * d) / 365;
  //console.log(440 - (440 * d) / 365);
  hh.style.strokeDashoffset = 250 - (250 * h) / 24;
  mm.style.strokeDashoffset = 250 - (250 * m) / 60;
  ss.style.strokeDashoffset = 250 - (250 * s) / 60;
  // console.log(440 - (440 * s) / 60);

  day_dot.style.transform = `rotateZ(${d * 0.986}deg)`;
  hr_dot.style.transform = `rotateZ(${h * 15}deg)`;
  min_dot.style.transform = `rotateZ(${m * 6}deg)`;
  sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
});

document.getElementById("myAudio").play();
