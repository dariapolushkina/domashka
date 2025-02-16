
document.addEventListener("DOMContentLoaded", function () {
  // Задача 1
  let str 
  str = 'abcde'

  alert (str[0]);
  alert (str[1]);
  alert (str[2]);
  alert (str[3]);
  alert (str[4]);

  // Задача 2

  let a = parselnt(prompt("Введи 1-ое число"));
  let b = parselnt(prompt("Введи 2-ое число"));
  console.log (a>0 || b>0);

  // Задача 3

  let age = parselnt(prompt("Сколько тебе лет?"));
  if (age >= 18) {
      console.log ("Совершеннолетний")}
  else {
      console.log ("Несовершеннолетний")}
})