const passwordHolder = document.getElementById("password");
const btn = document.getElementById("btn");
const lengthrange = document.getElementById("length");
const lengthHolder = document.getElementById("lengthHolder");
const copyBtn = document.getElementById("copyBtn");

const capsLock = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = capsLock.toLowerCase();
const number = "0123456789";
const symbol = "@#$%^&*()_+~[|{]></-}=";
const allChars = capsLock + lowerCase + number + symbol;

document.addEventListener("DOMContentLoaded", () => {
  lengthHolder.textContent = lengthrange.value;
});

lengthrange.addEventListener("input", (evt) => {
  lengthHolder.textContent = evt.target.value;
});

copyBtn.addEventListener("click", () => {
  if(!passwordHolder.textContent) return;
  navigator.clipboard.writeText(passwordHolder.textContent)
  btn.textContent = "Copied"
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = "Generate"
    btn.disabled = false;
  }, 2000);
});

btn.addEventListener("click", () => {
  let counter = 2;
  let password = "";
  let length = lengthHolder.textContent;

  let selected = Math.floor(Math.random() * counter);
  if (selected === 1) {
    password += capsLock[Math.floor(Math.random() * capsLock.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  } else {
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += capsLock[Math.floor(Math.random() * capsLock.length)];
  }

  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length)
    password += allChars[Math.floor(Math.random() * allChars.length)];

  passwordHolder.textContent = password;
});
