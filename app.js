function checkPalindrom(str) {
  return str == str.split("").reverse("").join("")
    ? `${str} is palindrom`
    : `${str} is not polindrom`;
}
console.log(checkPalindrom("Aston"));