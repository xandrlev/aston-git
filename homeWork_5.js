// 1) Порешать типовые задачи - написать порядок и вывод в консоли

let promiseTwo = new Promise((resolve, reject) => {
  resolve("a"); // передаём выполненый результат "а"
});

promiseTwo
  .then((res) => {
    return res + "b";
  }) // по цепочке then происходит конкатенация символов
  .then((res) => {
    return res + "с";
  }) // по цепочке then происходит конкатенация символов
  .finally((res) => {
    return res + "!!!!!!!";
  }) // finally игнорируется
  .catch((res) => {
    return res + "d";
  }) // catch игнорируется, так как промис выполнился положительно и нет ошибок
  .then((res) => {
    console.log(res); // выводит в консоль "abc"
  });

// 2)
function doSmth() {
  return Promise.resolve("123"); // передаём выполненый результат "123"
}

doSmth()
  .then(function (a) {
    console.log("1", a); // выводит в консоль "1 123"
    return a; // по цепочке then передаёт "a" дальше
  })
  .then(function (b) {
    console.log("2", b); // выводит в консоль "2 123"
    return Promise.reject("321"); // создаётся и возвращается новый промис, что позволяет продолжить цепочку (Promise Chain) и передать данные дальше
  })
  .catch(function (err) {
    console.log("3", err); // ловится ошибка reject из предидущего промиса и выводится "3 123"
  })
  .then(function (c) {
    console.log("4", c); // т.к. предидущий catch ничего не вернул выведит "4 undefined"
    return c;
  });

// 3) Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
// Входные данные: [10, 12, 15, 21]

const arr = [10, 12, 15, 21];

const printIndexWithDelay = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      console.log(`Index element: ${i}`);
    }, 3000 * i);
  }
};

const printIndexWithDelayAsync = async (arr) => {
  for (const [index] of arr.entries()) {
    await new Promise((res) => {
      setTimeout(res, 3000);
      console.log(`Index element: ${index}`);
    });
  }
};

printIndexWithDelayAsync(arr);

/* 4) Прочитать про Top Level Await (можно ли использовать await вне функции async)

- Top Level Await («глобальный» await) - принцип состоит в превращении ES модулей в подобие асинхронных функций.
  Когда другие модули импортируют такой модуль, они будут ждать его загрузки перед тем, как начать вычислять свое тело.
  Если попытаться использовать ключевое слово «await» за пределами асинхронной функции, то произойдёт синтаксическая ошибка.
  Во избежание этого рекомендуется использовать немедленно вызываемые функциональные выражения (IIFE).
*/

// БОНУС ЗАДАНИЕ
// Необходимо реализовать функцию fetchUrl, которая будет использоваться следующим образом.
// Внутри fetchUrl можно использовать условный метод fetch, который просто возвращает
// Promise с содержимым страницы или вызывает reject */
// fetchUrl('https://google/com&#39;)
// .then(...)
// .catch(...) // сatch должен сработать только после 5 неудачных попыток
// получить содержимое страницы внутри fetchUrl

const URL = "https://google/com&#39";

const fetchUrl = (url, maxAttempt = 5) => {
  return new Promise((res, rej) => {
    let attempt = 0;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP status:, ${response.status}`);
        }
        const content = response.json();
        res(content);
      } catch (error) {
        console.error(`Error fetching: ${error.message}`);
        attempt++;

        if (attempt < maxAttempt) {
          setTimeout(() => fetchData(), 1000);
        } else rej(error);
      }
    };
    fetchData();
  });
};

fetchUrl(URL)
  .then((content) => console.log(content))
  .catch((error) => console.error(error));
