function removeStarsFromString(s) {
    let result = "";
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== "*") {
          console.log(s[i])
        result += s[i];
      }
    }
  
    return result;
  }
  
  const s = "leet**cod*e"
  const result = removeStarsFromString(s);
  console.log(result);