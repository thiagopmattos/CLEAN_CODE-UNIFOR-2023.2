
const maximaTentativaLogins = 4




function tentarLogin(senha) {
    let tentativas = 0;
    const senhaCorreta = '12345';

    while (tentativas < maximaTentativaLogins) {
        if (senha === senhaCorreta) {
            return 'Login efetuado com sucesso!';
        }
        tentativas++;
    }

    return 'Tentativas de login excedidas.';
}

console.log(tentarLogin('123'));
