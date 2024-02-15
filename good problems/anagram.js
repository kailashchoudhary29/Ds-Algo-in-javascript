//anagram code



const checkAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let counter = {};

  for (let letter of str1) {
    counter[letter] = (counter[letter] || 0) + 1;
    console.log(counter[letter]);
  }
  console.log(counter)

  for (let lettercheck of str2) {
    if (!counter[lettercheck]) {
      return false;
    }
    counter[lettercheck]--;
  }

  return true;
};

const string1 = 'hello';
const string2 = 'llloeh';

const result = checkAnagram(string1, string2);
console.log(result);
