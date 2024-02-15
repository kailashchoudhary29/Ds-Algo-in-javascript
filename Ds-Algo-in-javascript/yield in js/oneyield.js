//yield in javascript

function* simepleGenerator(){
    console.warn('hello world');
    yield 10
    yield "welcome";
    yield true;
}


let output = simepleGenerator()

// console.log(output.next().value)
console.log("value:",output.next().value)
console.log("value---:",output.next())
console.log("value---:",output.next())
console.log("value---:",output.next())
// console.log(output.next())