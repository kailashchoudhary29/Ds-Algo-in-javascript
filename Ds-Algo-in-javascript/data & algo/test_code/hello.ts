export {}
let message = "hello world"
console.log(message)


let demo : number  = 5
console.log(demo)


let word : string = "welcome to typescript"
console.log(word)


let all : any = `${word} it is good language`
console.log(all)


let t_f : boolean  = true;
console.log(t_f)

let n : null = null
let u  : undefined = undefined 


console.log(n)
console.log(u)


let list : number[] = [1,2,3,5]
console.log(list)


let list_string  :  string[] = ["welcome","typescript"]

console.log(list_string)





let list2 :Array<Number> = [1,4]
console.log(list2)

let mix :  [string,number] = ['welcome',90]

console.log(mix)





enum Colors {
    Red=2,Green,Blue
}


let c : Colors =  Colors.Green
console.log(c)

function sum(num1 :number,num2:number) : number{
    return num1 + num2 
}

let sum1 =  sum(10,80)
console.log(sum1)
// let sum2 =  sum(10)
// console.log(sum2)

interface Person{
    firstname:string;
    lastname: string
}

function fullname(person:Person){

    console.log(`${person.firstname} and ${person.lastname}`)

}

let p = {
    firstname:'Welcome',
    lastname : 'typescript'
}

fullname(p)


class Employee {
    employeeName : string;

    constructor(name:string){
        this.employeeName =  name
    }
    greet(){
        console.log("method call"+this.employeeName)
    }
}

let employee1 = new Employee('john')
console.log(employee1.employeeName)
employee1.greet()

