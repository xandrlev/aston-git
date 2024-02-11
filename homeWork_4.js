/* 1) Какие бывают алгоритмы сортировок ? 

- Сортировка пузырьком (Bubble Sort): Этот алгоритм является стабильным. Алгоритм перебирает весь массив элементов,
  сравнивая два соседних элемента друг с другом и меняя их местами в соответствии с условиями. Элементы с большим
  значением опускаются вниз массива, а элементы с наименьшим значением поднимаются вверх. Сложность O(n^2).

- Сортировка перемешиванием (Cocktail sort): Двунаправленный, оптимизированный вариант сортировки пузырьком. Сложность O(n^2).

- Сортировка расчёской (англ. Comb sort): Модификация сортировки пузырьком, в которой расстояние между сравниваемыми парами значений отлично от 1.
  Сложность O(n^2). Является нестабильным.

- Сортировка выбором (Selection Sort): Этот алгоритм сортировки при каждой итерации проходит по неотсортированной части массива,
  находит минимальный элемент и переносит его в начало массива. Может быть как стабильным, так и нестабильным алгоритмом.
  Сложность O(n^2).

- Сортировка слиянием (Merge Sort): Разделяет массив на две половины, рекурсивно сортирует и объединяет. Cложность: O(n log n).

- Сортировка Timsort (англ. Timsort): Гибрид сортировок вставками и слиянием. Основан на предположении, что при решении практических задач
входной массив зачастую состоит из отсортированных подмассивов. Cложность: O(n log n). Является стабильным.

- Быстрая сортировка (Quick Sort): Этот алгоритм определяет так называемый «стержень» и разбивает массив
на подмассивы относительно «стержня», которые затем сортируются. Этот алгоритм сортировки является нестабильным.
Сложность O(n * log n).

- Пирамидальная сортировка (Heap Sort): Cначала строится пирамида из элементов исходного массива. Пирамида (или двоичная куча)
  — это способ представления элементов, при котором от каждого узла может отходить не больше двух ответвлений.
  А значение в родительском узле должно быть больше значений в его двух дочерних узлах. Сложность O(n log n). Является нестабильным.

- Циклическая сортировка (Cycle Sort): Этот алгоритм разбивает массив на циклы. Затем, внутри этих циклов происходят перестановки элементов
до тех пор, пока все циклы не завершатся и массив не будет отсортирован. Является нестабильным. Сложность O(n^2).


2) Прочитать про "Операторы и выражения, циклы в JS"*/

// 3) Создать объект Person несколькими способами, после создать объект Person2, чтобы в нём были доступны методы объекта Person.
//   Добавить метод logInfo чтоб он был доступен всем объектам.

// при помощи литерала и встроенных методов Object
const personLiteral = {
  name: "Serg",
  returnThis: function () {
    console.log(this);
  },
};

const personLiteral2 = Object.create(personLiteral);

personLiteral2.name = "Helena";
personLiteral2.returnThis();

personLiteral.__proto__.logInfo = function () {
  console.log(`Hello, my name: ${this.name}`);
};

personLiteral2.logInfo();

// при помощи функции-конструктор
function PersonFunctionConstruction(name, age) {
  this.name = name;
  this.age = age;

  this.returnThis = function returnThis() {
    console.log(this);
  };
}

const person1 = new PersonFunctionConstruction("Alex", 25);
const person2 = new PersonFunctionConstruction("John", 30);

PersonFunctionConstruction.prototype.logInfo = function () {
  console.log(`Hello, my name: ${this.name}, i'm: ${this.age} years old.`);
};

person1.logInfo();
person2.logInfo();
person2.returnThis();

// при помощи класса
class PersonClass {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  logInfo() {
    console.log(`Hello, my name: ${this._name}, i'm: ${this._age} years old.`);
  }
}

// 4) Создать класс PersonThree c get и set для поля name и конструктором, сделать класс наследник от класса Person.

class PersonThree extends PersonClass {
  constructor(name, age) {
    super(name, age);
  }

  get getName() {
    super.logInfo();
  }

  set setName(newName) {
    this._name = newName;
  }
}
const person3 = new PersonThree("Smith", 33);

person3.getName;
person3.setName = "Hanna";
person3.getName;

// БОНУС:
// 1) Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total:

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;
//result = [4, 9]

const firstSum = (arr, total) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] + arr[k] === total) {
        return [arr[i], arr[k]];
      }
    }
  }
  return null;
};

console.log(firstSum(arr, total));

// 2) Какая сложность у вашего алгоритма ?
// У этого алгоритма сложность O(n^2), так как есть вложенный цикл.
