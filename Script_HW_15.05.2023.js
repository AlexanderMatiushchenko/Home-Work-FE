// 3. Написать функцию, которая вычисляет площадь окружности. S = π × r2
function Area_of_Circle(Area_num) {
  return 3.14 * (Area_num * Area_num);
}
console.log(Area_of_Circle(10));

//  2.Написать функцию, которая получает
//  один аргумент (массив целых чисел) и наибольшее число из массива.

function num(array_of_numbers) {
  let sum = 0;
  for (let i = 0; i < array_of_numbers.length; i++) {
    if (array_of_numbers[i] > sum) {
      sum = array_of_numbers[i];
    }
  }
  return sum;
}
const array_of_numbers = [100, 2000, 3000, 5000, 7000, 100, 5];
const result = num(array_of_numbers);
console.log(result);

// 1. Написать функцию, которая получает один аргумент (массив целых чисел) и возвращает сумму положительных элементов.
function positive(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }
  return sum;
}
const numbers = [3, 4, 5, 10, -2, -3, 1 - 10];
const result2 = positive(numbers);
console.log(result2);
