console.log("print first word letter");

const first_word_letter = (string) => {
  for (let i = 0; i <= string.length; i++) {
    if (string[i] != " ") {
      if (i == 0) {
        console.log(string[i]);
      } else if (string[i - 1] == " ") {
        console.log(string[i]);
      }
    }
  }
};

first_word_letter("   Hello world!! VScode");
