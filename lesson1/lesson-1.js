//  Задание 1:
const town = "Мелитополь",
  region = "Запорожская",
  population = 153,
  footballStadium = true;
const resalt = `Я живу в городе ${town}, ${region} область. Численоость населения ${population} тысячи и есть футбольный стадион!`
// console.log(resalt);

// Задание 2:
const height = 40;
const width = 70;
const RectangleArea = height * width;
// console.log(`Площадь прямоугольника составляет ${RectangleArea} см`);

//Задание 3:
const time = 2;
const speedOfFirst = 95;
const speedOfSecond = 114;
const DistanceСities = (speedOfFirst * time) + (speedOfSecond * time);
// console.log(`Расстояние между городами ${DistanceСities} км`);

// Задание 4:

const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

if (randomNumber < 20) {
  console.log("randomNumber меньше 20");
} else if (randomNumber > 50) {
  console.log("randomNumber больше 50");
} else {
console.log("randomNumber больше 20, и меньше 50");
};

//  Задание 5:

switch (true) {
  case randomNumber < 20: console.log("randomNumber меньше 20");
    break;
  case randomNumber > 50: console.log("randomNumber больше 50");
    break;
  default : console.log("randomNumber больше 20, и меньше 50");
}


  