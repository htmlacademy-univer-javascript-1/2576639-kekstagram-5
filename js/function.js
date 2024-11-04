function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

function isPalindrome (str) {
  const normalizedStr = str.toLowerCase().replace(/\s+/g, '');
  return normalizedStr === normalizedStr.split('').reverse().join('');
}
