
const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};


function calcularFaturamentoTotal(faturamentoPorEstado) {
    const valores = Object.values(faturamentoPorEstado);
    return valores.reduce((acc, val) => acc + val, 0);
}


function calcularPercentuais(faturamentoPorEstado, totalFaturamento) {
    let percentuais = {};
    for (let estado in faturamentoPorEstado) {
        let percentual = (faturamentoPorEstado[estado] / totalFaturamento) * 100;
        percentuais[estado] = percentual.toFixed(2);
    }
    return percentuais;
}

const faturamentoTotal = calcularFaturamentoTotal(faturamento);

const percentuais = calcularPercentuais(faturamento, faturamentoTotal);


console.log(`Faturamento total: R$${faturamentoTotal.toFixed(2)}`);
console.log("Percentual de contribuição por estado:");
for (let estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}%`);
}
