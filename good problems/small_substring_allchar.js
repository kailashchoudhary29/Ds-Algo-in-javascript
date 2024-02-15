const smallestSubstring = (arr, str) => {
  let charcount = {};
  let requireCharCount = arr.length;

  for (let char of arr) {
    charcount[char] = (charcount[char] || 0) + 1;
  }

    console.log(charcount);

  let left = 0;
  let right = 0;
  let minlength = Infinity;
  let minSubstring = "";

  while (right < str.length) {
    console.log(charcount[str[right]])
    if (charcount[str[right]] > 0) {
      requireCharCount--;
    }
   charcount[str[right]] = (charcount[str[right]] || 0) - 1;
  right++;
    // console.log(charcount[str[right]]+":")
    while (requireCharCount === 0) {
      if (right - left < minlength) {
        minlength = right - left;
        minSubstring = str.substring(left, right);
      }
     charcount[str[left]] = (charcount[str[left]] || 0) + 1;
      if (charcount[str[left]] > 0) {
        requireCharCount++;
      }
      left++;
    }
  }
 return minSubstring;
};

// const arrStringData = ["x", "y", "z"];
// const substringcheck = "xyyzyzyx";
const arrStringData = ["A", "B", "C"];
const substringcheck = "ADOBECODEBANC";

const resultSubstring = smallestSubstring(arrStringData, substringcheck);
console.log("Result: " + resultSubstring);
