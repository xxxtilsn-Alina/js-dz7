// 1.Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
const arrey = [1, 2, 3];
arrey[1] = 10;
console.log(arrey);

// 2.Створити масив із трьох рядків. Додати до масиву ще одну рядків.

const arrey2 = ["Sun", "Sky", "tree"];
arrey2[3] = "cloud";
console.log(arrey2);

// 3.Створити скрипт який поверне суму всіх чисел в масиві.
const arrey3 = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;

for (let i = 0; i < arrey3.length; i++) {
  sum += arrey3[i];
}
console.log(sum);

// 4.Створити масив з 5-ти чисел.
//  Вивести на екран всі елементи масиву за допомогою циклу for.

const arrey4 = [1, 2, 3, 4, 5];
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// // 5.Створити масив із 5-ти рядків.
// // Вивести на екран кожен рядокз масиву , який містить більше 5-ти символів.

const arrey5 = ["apple", "sun", "spoilt", "responsibility", "IT"];
for (let i = 0; i < arrey5.length; i++) {
  if (arrey5[i].length > 5) {
    console.log(arrey5[i]);
  }
}

//  6.Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
const masiw1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maxs = masiw1[0];
for (let i = 1; i < masiw1.length; i++) {
  if (masiw1[i] > maxs) {
    maxs = masiw1[i];
  }
}
console.log(`максимальне значення ${maxs}`);

// 7.Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
const masiw = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 2; i <= masiw.length; i += 2) {
  console.log(i);
}
