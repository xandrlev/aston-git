/* 1) Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?

  - В JavaScript массивы считаются "неправильными" потому, что они не являются строго типизированными
  и могут содержать элементы разных типов данных (что не свойственно для строготипизированных языков программирования).
  Это происходит из-за того, что JS динамический язык программирования. У массивов длинна изменяется динамически. 
  Можно добавлять и удалять элементы без явного указания его размера. Так же они могут быть sparse (разряженными)
  с спропусками значений по ключам (образуется дыра, имеющая значение undefined).

  - Cтруктуры данных, которые можно реализовать с помощью массивов:
    - Стек (при помощи методов push, pop);
    - Очередь (push и shift);
    - Список (splice для вставки и удаления элементов в любой позиции);
    - Дерево (при помощи вложенных массивов);
    - Словари (используются индексы или ключи для доступа к элементам);
    - Множества (Set) (используются методы push и indexOf для добавления и проверки наличия уникальных элементов);
*/

// 2) Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

logger.call(obj);
logger.apply(obj);

const boundLogger = logger.bind(obj);
boundLogger();

/* 3.1 Массивы:
- Создайте массив чисел и найдите его сумму.
- Создайте массив строк и объедините их в одну строку.
- Найдите максимальный и минимальный элементы в массиве чисел.
*/

const numberArray = [8, 15, 2, 87, -10, 65];
const stringArray = [
  "Создайте",
  "массив",
  "строк",
  "и",
  "объедините",
  "их",
  "в",
  "одну",
  "строку",
];

const summOfArray = (array) => array.reduce((acc, curr) => acc + curr, 0);
console.log("Array summ:", summOfArray(numberArray));

const findMinMax = (array) => {
  if (
    !Array.isArray(array) ||
    !array.every(Number.isFinite) ||
    array.length === 0
  ) {
    return "Enter an array of numbers";
  }

  let min = array.reduce((acc, curr) => (acc < curr ? acc : curr));
  let max = array.reduce((acc, curr) => (acc > curr ? acc : curr));

  return { min, max };
};
console.log(findMinMax(numberArray));

const joinString = (str) => str.join(" ");
console.log(joinString(stringArray));

// 3.2 Stack (стек): - Реализуйте стек с использованием массива.

function createStack() {
  let stack = [];
  let length = 0;

  function isEmpty() {
    return length === 0;
  }

  // add element
  function push(element) {
    stack.push(element);
    length++;
  }

  // delete element
  function pop() {
    if (length !== 0) {
      length--;
      return stack.pop();
    }
  }

  // return the last element
  function peek() {
    return !this.isEmpty() ? stack[length - 1] : "Stack is empry";
  }

  function size() {
    return length;
  }

  function clear() {
    stack.length = 0;
    length = 0;
  }

  return { isEmpty, push, pop, peek, size, clear };
}
const stack = createStack();

/* 3.3 Queue (очередь):
- Реализуйте очередь с использованием массива.
*/

function createQueue() {
  let queue = [];
  let length = 0;

  function isEmpty() {
    return length === 0;
  }

  // add element
  function enqueue(element) {
    queue.push(element);
    length++;
  }

  // delete element
  function dequeue() {
    if (length !== 0) {
      length--;
      return queue.shift();
    }
  }

  // return the first element
  function front() {
    return !this.isEmpty() ? queue[0] : "Queue is empry";
  }

  function size() {
    return length;
  }

  function clear() {
    queue.length = 0;
    length = 0;
  }

  return { isEmpty, enqueue, dequeue, front, size, clear };
}

// - Имитируйте работу очереди на примере ожидания на кассе.

function createQueueShop() {
  const queue = [];

  function enqueue(person) {
    queue.push(person);
    console.log(`${person} added to queue`);
  }

  function dequeue() {
    const removedPerson = queue.shift();
    return removedPerson !== undefined
      ? console.log(`${removedPerson} removed from queue`)
      : null;
  }

  function pay() {
    if (queue.length > 0) {
      const person = queue[0];
      const amount = Math.floor(Math.random() * 100);
      const time = Math.floor(Math.random() * 100);

      console.log(`${person} paying ${amount}$`);

      setTimeout(() => {
        console.log(`${person} finish paying`);
        dequeue();
        pay();
      }, time * 100);
    } else {
      console.log(`Queue is empty`);
    }
  }

  return { enqueue, dequeue, pay };
}

const shop = createQueueShop();
shop.enqueue("Alex");
shop.enqueue("Smith");
shop.pay();

// Бонус задание: Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()

Function.prototype.myOwnBind = function (context) {
  const fn = this; // функцию не нужно передавать как аргумент
  const args = Array.prototype.slice.call(arguments, 1);

  return function () {
    const combinedArgs = args.concat(Array.prototype.slice.call(arguments));
    return fn.apply(context, combinedArgs);
  };
};
