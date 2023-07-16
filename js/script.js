const passwordHolder = document.getElementById("password");
const btn = document.getElementById("btn");
const lengthrange = document.getElementById("length")
const lengthHolder = document.getElementById("lengthHolder")

const capsLock = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = capsLock.toLowerCase();
const number = "0123456789";
const symbol = "@#$%^&*()_+~|{}[]></-=";
const allChars = capsLock + lowerCase + number + symbol;

lengthrange.addEventListener("input", evt => {
    lengthHolder.textContent = evt.target.value
})

// lengthrange.addEventListener("mousedown", evt => {
//     lengthHolder.textContent = evt.target.value
// })

btn.addEventListener("click", () => {
  let counter = 2;
  let password = "";
  let length = lengthHolder.textContent;

  while (counter > 0) {
    let selected = Math.floor(Math.random() * counter);
    if (selected === 1) {
      password += capsLock[Math.floor(Math.random() * capsLock.length)];
    } else {
      password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }

    counter--;
  }

  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length)
    password += allChars[Math.floor(Math.random() * allChars.length)];

  passwordHolder.textContent = password;
});
