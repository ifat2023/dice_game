let counter = 0;

function magic() {
  let num1 = getRandomInt(1, 6);
  let num2 = getRandomInt(1, 6);

  document.getElementById("dice1").src = `${num1}.jpg `;
  document.getElementById("dice2").src = `${num2}.jpg `;

  if (num1 == num2) {
    counter = counter++;
    document.getElementById("counterNumber").innerHTML = counter;
    document.getElementById("result").innerHTML = "  כל הכבוד יצא לך דאבל :))";
  } else {
    document.getElementById("result").innerHTML = "";
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
