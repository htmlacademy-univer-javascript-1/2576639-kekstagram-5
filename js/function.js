function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

console.log(checkStringLength('проверяемая строка', 20));
console.log(checkStringLength('проверяемая строка', 18));
console.log(checkStringLength('проверяемая строка', 10));

function isPalindrome (str) {
  const normalizedStr = str.toLowerCase().replace(/\s+/g, '');
  return normalizedStr === normalizedStr.split('').reverse().join('');
}

console.log(isPalindrome('топот')); // true
console.log(isPalindrome('ДовОд')); // true
console.log(isPalindrome('Кекс'));  // false
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true
