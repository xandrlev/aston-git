function checkPalindrom(str) {
  let newStr = str.replace(/[^a-zA-Z0-9]+/gi, '').toLowerCase();
  return newStr.toLowerCase() == newStr.toLowerCase().split("").reverse("").join("")
    ? `${str} is palindrom`
    : `${str} is not polindrom`;
}
console.log(checkPalindrom("Go hang a salami, I'm a lasagna hog"));