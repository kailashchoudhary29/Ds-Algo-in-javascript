function reverseString(str) {
    if (str === '') {
      return '';
    } else {
      return reverseString(str.substr(1)) + str.charAt(0);
    }
  }
  
  var str = 'Hello, World!';
  var reversedStr = reverseString(str);
  console.log(reversedStr);