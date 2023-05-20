// 1. Дайте ответ на вопрос, что такое объект в JS.
// Объект реализует концепцию ассоциативного массива
// Объекты же используются для хранения коллекций различных значений и более сложных сущностей.

// 2.Напишите функцию, которая принимает товары (массив объектов) и возвращает строку 'Самый дорогой товар <НАЗВАНИЕ> стоит  EUR'.

let products = [
  { title: "Product 1", price: 100 },
  { title: "Product 2", price: 500 },
];

function expensive_order(products) {
  if (products[0].price < products[1].price) {
    console.log(
      `Самый дорогой товар ${products[1].title} стоит ${products[1].price}  EUR`
    );
  } else if (products[0].price > products[1].price) {
    console.log(
      `Самый дорогой товар ${products[0].title} стоит ${products[0].price}  EUR`
    );
  }
}
console.log(expensive_order(products));

//3. Напишите функцию, которая принимает товары (массив объектов) и возвращает их общую сумму (скаляр).

function sum_of_products(products) {
  return products[0].price + products[1].price;
}

console.log(sum_of_products(products));
