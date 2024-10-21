


const bandeira = 15



function calcularFrete(distancia) {
    return distancia * bandeira;
}

const frete = calcularFrete(50);
console.log(`O valor do frete é: ${frete}`);
