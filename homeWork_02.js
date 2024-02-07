// Задание 1 – Создать объект counter всеми возможными способами;

const counter1 = {};
const counter2 = new Object();
const counter3 = Object.create(null);
const counter4 = {
  key1: "value1",
  key2: "value2",
  innerObj: {
    key1: "value1",
    key2: "value2",
  },
};

function createMyObject() {
  return {
    key1: "value1",
    key2: "value2",
  };
}
const counter5 = new createMyObject();

class CreateObject {
  constructor(key1, key2) {
    this.key1 = key1;
    this.key2 = key2;
  }
}
const counter6 = new CreateObject("value1", "value2");

const counter7 = Object.fromEntries([
  ["key1", "value1"],
  ["key2", "value2"],
]);

// Задание 2 – Скопировать объект counter всеми возможными способами;

const copyCounter0 = counter7; // условное копирование, по факту создаётся ссылка на другой объект
const copyCounter1 = Object.assign({}, counter7);
const copyCounter2 = { ...counter6 };
const copyCounter3 = JSON.parse(JSON.stringify(counter6));
const copyCounter4 = structuredClone(counter4);
// так же можно при помощи функций сторонних бибилиотек (lodash, ramba, etc.)

// Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;

function makeCounter() {
  let counter = 0;
  return function () {
    return counter++;
  };
}

const makeCounter1 = function (count) {
  return count++;
};

const makeCounter2 = (count) => ++count;

(function makeCounter3() {
  return "IIFE";
})();

const makeCounter4 = new Function("arg1", "arg2", "return arg1 + arg2;");

const obj = {
  count: 0,
  makeCounter: function () {
    return ++this.count;
  },
};
obj.makeCounter();

class Counter {
  constructor(count) {
    this.count = count;
  }
  makeCounter() {
    return (this.count += 1);
  }
}
const makeCounter5 = new Counter(5);

const makeCounter6 = async () => {};
function* myGenerator7() {}

/* Задание 4 - прочитать и описать работу глобальной функции structuredClone() 
Функция structuredClone() используется для глубокой копии объекта, включая все его вложенные объекты и структуру данных.
- Умеет обрабатывать объекты с циклическими ссылками.
- Рекурсивно копирует все свойства объекта (объекты, массивы, Map, Set и др.)

  Ограничения:
  - Не способен копировать функции
  - Отбрасывает цепочку прототипов, поэтому использовать с экземпляром классов не рекомендуется
  - Не все структуры может клонировать (Error, DOM узлы, дескрипторы свойств, сеттеры и геттеры), вызовет исключение.
*/

// Бонус Задание 1 – Написать функцию глубокого сравнения двух объектов:

const obj1 = { here: { is: "on", other: "3" }, object: "Y" };
const obj2 = { here: { is: "on", other: "2" }, object: "Y" };

const deepEqual = (obj1, obj2) => {
  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return obj1 === obj2;
  }

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
};
console.log(deepEqual(obj1, obj2));

// Бонус Задание 2 – Развернуть строку в обратном направлении при помощи методов массивов:

function reverseStr(str) {
  return str.split("").reverse().join("");
}

function reverseStr(str) {
  return [...str].reverse().join("");
}

function reverseStr(str) {
  return Array.from(str).reduceRight((acc, cur) => acc + cur, "");
}

function reverseStr(str) {
  return str
    .split("")
    .map((_, index, arr) => arr[arr.length - 1 - index])
    .join("");
}

function reverseStr(str) {
  const reversedArray = [];

  for (let char of str) {
    reversedArray.unshift(char);
  }

  return reversedArray.join("");
}
