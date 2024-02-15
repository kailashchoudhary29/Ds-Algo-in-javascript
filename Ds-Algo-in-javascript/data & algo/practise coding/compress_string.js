console.log("compress string");

const compress_string = (string) => {
  let compress_string_new = "";

  let string_split = string.split("");
  for (let i = 0; i < string_split.length; i++) {
    let count = 1;
    let current_latter = string_split[i];
    while (
      string_split[i] === string_split[i + 1] &&
      i < string_split.length - 1
    ) {
      count++;
      i++;
    }
    if (count === 1) {
      compress_string_new = compress_string_new + current_latter;
    } else {
      compress_string_new = compress_string_new + current_latter + count;
    }
  }

  return compress_string_new;
};

console.log(compress_string("aaabbbccdd"));
