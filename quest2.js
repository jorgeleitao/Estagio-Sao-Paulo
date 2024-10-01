function isFibonacci(num) {
    let a = 0;
    let b = 1;

   
    if (num === 0 || num === 1) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    }

    
    let nextFib;
    while (b <= num) {
        nextFib = a + b;
        a = b;
        b = nextFib;

        if (b === num) {
            return `O número ${num} pertence à sequência de Fibonacci.`;
        }
    }

    return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
}


let numero = 13; 
console.log(isFibonacci(numero));
