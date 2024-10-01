
const faturamentoDiario = [
    1200, 2300, 850, 4600, 3800, 0, 5200, 4100, 800, 2500, 1700, 3600, 
    0, 2000, 5000, 700, 3000, 0, 2900, 4800, 3300, 2700, 600, 4000, 
    2100, 1500, 3800, 4900, 1300, 2800
];


function menorFaturamento(faturamento) {
    let menor = Math.min(...faturamento.filter(valor => valor > 0));
    return menor;
}


function maiorFaturamento(faturamento) {
    let maior = Math.max(...faturamento);
    return maior;
}


function mediaMensal(faturamento) {
    const diasComFaturamento = faturamento.filter(valor => valor > 0);
    const soma = diasComFaturamento.reduce((acc, val) => acc + val, 0);
    return soma / diasComFaturamento.length;
}


function diasAcimaMedia(faturamento, media) {
    const diasAcima = faturamento.filter(valor => valor > media).length;
    return diasAcima;
}


const menorValor = menorFaturamento(faturamentoDiario);
const maiorValor = maiorFaturamento(faturamentoDiario);
const media = mediaMensal(faturamentoDiario);
const diasAcima = diasAcimaMedia(faturamentoDiario, media);


console.log(`Menor valor de faturamento em um dia do mês: R$${menorValor}`);
console.log(`Maior valor de faturamento em um dia do mês: R$${maiorValor}`);
console.log(`Número de dias com faturamento superior à média mensal: ${diasAcima}`);
