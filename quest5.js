
function inverterString(str) {
    let stringInvertida = ''; 

 
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i]; 
    }

    return stringInvertida; 
}


let texto = "Estágio - São Paulo";
let textoInvertido = inverterString(texto);

console.log(`String original: ${texto}`);
console.log(`String invertida: ${textoInvertido}`);
