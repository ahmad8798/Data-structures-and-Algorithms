 function fibbinocci(val){
    let fib = [0,1]
    for(let i=2;i<val;i++){
        fib[i] = fib[i-2]+fib[i-1]
    }
    console.log(fib)
 }

 fibbinocci(10)