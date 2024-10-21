
const DESCONTO = 0.25



function calcularDesconto(preco) {
    return preco - (preco * DESCONTO);
}

const precoFinal = calcularDesconto(100);
console.log(`Preço com desconto: ${precoFinal}`);
