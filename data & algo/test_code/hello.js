"use strict";
exports.__esModule = true;
var message = "hello world";
console.log(message);
var demo = 5;
console.log(demo);
var word = "welcome to typescript";
console.log(word);
var all = "".concat(word, " it is good language");
console.log(all);
var t_f = true;
console.log(t_f);
var n = null;
var u = undefined;
console.log(n);
console.log(u);
var list = [1, 2, 3, 5];
console.log(list);
var list_string = ["welcome", "typescript"];
console.log(list_string);
var list2 = [1, 4];
console.log(list2);
var mix = ['welcome', 90];
console.log(mix);
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 2] = "Red";
    Colors[Colors["Green"] = 3] = "Green";
    Colors[Colors["Blue"] = 4] = "Blue";
})(Colors || (Colors = {}));
var c = Colors.Green;
console.log(c);
function sum(num1, num2) {
    return num1 + num2;
}
var sum1 = sum(10, 80);
console.log(sum1);
function fullname(person) {
    console.log("".concat(person.firstname, " and ").concat(person.lastname));
}
var p = {
    firstname: 'Welcome',
    lastname: 'typescript'
};
fullname(p);
