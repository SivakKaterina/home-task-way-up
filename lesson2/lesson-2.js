//  Задание 1:
for (let i = 10; i < 50; i++){
  if (i % 2 === 0) {
    console.log(i);
  }
};

// Задание 2:

const me = {
  name: 'Екатерина',
  surname: 'Сивак',
  age: 27,
  pet: false,
};
console.log(me);

// Задание 3:

const array = [
  'я в Симбирск,',
  'в трактире.',
  'с утра',
  'В ту же ночь',
  'Я остановился',
  'для закупки',
  'что и было поручено Савельичу.',
  'приехал,',
  'где должен был',
  'нужных вещей',
  'отправился по лавкам',
  'пробыть сутки',
  'Савельич'
];

const result = [];
result.push(array[3],array[7],array[0],array[8],array[11],array[5],array[9],array[6],array[4],array[1],array[12],array[2],array[10])
console.log(result);


//  Задание 4:

const passport = (firstName,lastName) => {
   const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
}

passport("Сивак", "Екатерина")

// Задание 5:
let i = 20;
while (i <= 67) {
  i++;
  if (i % 2 !== 0) {
    console.log(i);
  }
}