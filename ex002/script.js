// 1. MAPEAMENTO DOS ELEMENTOS
var inputNac = document.getElementById('nactxt');
var res = document.getElementById('res');

// 2. FUNÇÃO PARA VERIFICAR A NACIONALIDADE
function verificarNacionalidade() {
    var txtnac = inputNac.value.trim().toLowerCase();

    // Mostramos a nacionalidade digitada
    res.innerHTML = `<p>Sua Nacionalidade atual é: <strong>${inputNac.value}</strong></p>`;

    // Verificamos se é igual a 'brasil'
    if (txtnac === 'brasil' || txtnac === 'brasileiro' || txtnac === 'brasileira') {
        res.innerHTML += `<p style='color:green;'>Você é nosso contemporâneo, é com grande prazer saber disso!!!</p>`;
    } else {
        res.innerHTML += `<p style='color:blue;'>Seja muito bem-vindo ao nosso país, espero que sua jornada seja muito agradável!</p>`;
    }
}

// 3. FUNÇÃO PARA LIMPAR O CAMPO E A RESPOSTA
function limparTudo() {
    inputNac.value = ''; // Limpa o que o usuário digitou
    res.innerHTML = '';  // Apaga a resposta antiga da tela
}

// 4. ATRIBUIÇÃO DOS EVENTOS AOS BOTÕES (Gatilhos)
document.getElementById('btnVerificar').addEventListener('click', verificarNacionalidade);
document.getElementById('limparCampo').addEventListener('click', limparTudo);