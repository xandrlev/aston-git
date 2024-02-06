function checkPalindrom(str) {
  return str.toLowerCase() == str.toLowerCase().split("").reverse("").join("")
    ? `${str} is palindrom`
    : `${str} is not polindrom`;
}
console.log(checkPalindrom("Aston"));