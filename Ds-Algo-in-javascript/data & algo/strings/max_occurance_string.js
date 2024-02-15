console.log("most occurance string in the sentence");

const most_occurance = (string) => {
  //let words = string.match(/\w+/g);
  let words = string.split("");
  console.log(words);

  let occur_word = {};

  for (let word of words) {
    console.log(word + "55");

    if (!occur_word[word]) {
      occur_word[word] = 1;
      // console.log(occur_word[word] + "---");
    } else {
      occur_word[word]++;
      // console.log(occur_word[word] + "@@@@");
    }
  }

  console.log(occur_word);

  let max = 0;
  let mostRepeatedWord = "";

  for (let word of words) {
    if (occur_word[word] > max) {
      max = occur_word[word];
      mostRepeatedWord = word;
    }
  }

  return mostRepeatedWord;
};

let str = "aaabbc";
console.log(most_occurance(str));
