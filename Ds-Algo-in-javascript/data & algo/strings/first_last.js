console.log("first and last charactor");

const first_last_charactor = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (i == 0) console.log(string[i]);

    if (i == string.length - 1) console.log(string[i]);
    if (string[i] == " ") {
      console.log(string[i - 1], string[i + 1]);
    }
  }
};

first_last_charactor("Hello World! Javascript");
