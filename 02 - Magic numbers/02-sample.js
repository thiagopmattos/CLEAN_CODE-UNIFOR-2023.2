




const idadeParaDirigir = 18



function verificarSePodeDirigir(idade) {
    if (idade >= idadeParaDirigir) {
        return 'Pode dirigir';
    } else {
        return 'Não pode dirigir';
    }
}

console.log(verificarSePodeDirigir(16));
