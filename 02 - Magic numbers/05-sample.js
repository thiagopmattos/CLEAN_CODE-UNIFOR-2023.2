
const bonusGerente = 1000
const bonusSurpevisor = 500
const bonusNormal = 200

const imposto = 300

const superSalario  =10000

const impostoRenda = 0.27

const medioSalario = 3000

const imposto2 = 0.18

const imposto3 = 0.11












function calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo) {
    const salarioBase = horasTrabalhadas * valorHora;

    let salarioComBonus;
    if (cargo === 'gerente') {
        salarioComBonus = salarioBase + bonusGerente;
    } else if (cargo === 'supervisor') {
        salarioComBonus = salarioBase + bonusSurpevisor;
    } else {
        salarioComBonus = salarioBase + bonusNormal;
    }

    const salarioComDesconto = salarioComBonus - imposto;

    let salarioFinal;
    if (salarioComDesconto > superSalario) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * impostoRenda);
    } else if (salarioComDesconto > medioSalario) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * imposto2);
    } else {
        salarioFinal = salarioComDesconto - (salarioComDesconto * imposto3);
    }

    return salarioFinal;
}

const salario = calcularSalarioFuncionario(160, 25, 'gerente');
console.log(`O salário final é: ${salario}`);
