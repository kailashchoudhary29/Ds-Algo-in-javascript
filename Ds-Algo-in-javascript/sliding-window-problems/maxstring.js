function longestSubstringWithoutRepeatingCharacters(s) {
    let n = s.length;
    let set = new Set();
    let ans = "", i = 0, j = 0;
    while (i < n && j < n) {
      if (!set.has(s.charAt(j))) {
        set.add(s.charAt(j++));
        if (j - i > ans.length) {
          ans = s.substring(i, j);
        }
      } else {
        set.delete(s.charAt(i++));
      }
    }
    return ans;
  }



  let s = "abcdefghabcabcdefghabcdefabcdebb";
console.log(longestSubstringWithoutRepeatingCharacters(s));