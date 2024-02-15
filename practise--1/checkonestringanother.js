//check one string in another

const checkString = (str1, str2) => {
  const str1len = str1.length;
  const str2len = str2.length;

  

  for (let i = 0; i < str1len; i++) {
    if (str1[i] === str2[0]) {
     let flag = 0;
      for (let j = 0; j < str2len; j++) {
        if (str1[i + j] != str2[j]) {
          flag = 1;
          break;
        }
      }
      if (flag == 0) {
        return i;
      }
    }
  }
};

const outputstringCheck = checkString("geeksforgeek", "for");

console.log(outputstringCheck);
