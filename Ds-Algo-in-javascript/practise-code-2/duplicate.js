//Remove duplicates from an array and return unique values in O(n) complexity.

const removeDuplicate = (array) => {
  let items = {};

  array.forEach((item) => {
    if (!items[item]) {
      items[item] = item;
    }
  });

  return Object.values(items);
};

console.log(removeDuplicate([1, 2, 2, 3, 3, 1]));

const user = {
  name: "peter",
};

user.name = "john";
console.log(user);

const newmap = new Map([
  ["name", "peter"],
  [10, "number"],
  [true, "we can access boolean"],
]);
console.log(newmap.get(10));
