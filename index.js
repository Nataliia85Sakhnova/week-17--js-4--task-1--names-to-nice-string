// Сделайте интерфейс преобразования ФИО на три поля (input).
// Учтите, пожалуйста, все нюансы - лишние пробелы, отсутствие больших букв в именах и пр.

document.getElementById("names").onchange = (e) => {
const Arr = document.getElementById("names").value.split(" ")
const Arr2 = Arr.filter((item) => {
  return item; // return item.lenght>0; одно и то же
})
console.log(Arr2);

const niceLetters = Arr2.map((item) => {
  return item.slice(0,1).toUpperCase() + item.slice(1).toLowerCase();
})
console.log(niceLetters);

console.log(niceLetters.join(" "));
}

