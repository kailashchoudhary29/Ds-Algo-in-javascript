console.log("fibbonaci series")

const fibo_number = (n ) =>{

    if(n<2){
        return n 

    }
    return fibo_number(n-1) + fibo_number(n-2)

}


console.log(fibo_number(4))