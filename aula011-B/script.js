// Conectamos o evento de clique do botão diretamente à nossa função de verificação
document.getElementById('btnVerificar').addEventListener('click', function() {
    
    // Pegamos o elemento do input
    var inputNac = document.getElementById('nactxt');
    
    // Pegamos o TEXTO digitado, removemos espaços extras e deixamos tudo em minúsculo
    var txtnac = inputNac.value.trim().toLowerCase();
    
    // Pegamos a div onde a resposta será exibida
    var res = document.getElementById('res');

    // Mostramos a nacionalidade digitada (usando o valor original do input para ficar bonito)
    res.innerHTML = `<p>Sua Nacionalidade atual é: <strong>${inputNac.value}</strong></p>`;

    // Verificamos se é igual a 'brasil' (em minúsculo por causa do toLowerCase)
    if (txtnac === 'brasil' || txtnac === 'brasileiro' || txtnac === 'brasileira') {
        res.innerHTML += `<p style='color:green;'>Você é nosso contemporâneo, é com grande prazer saber disso!!!</p>`;
    } else {
        // Se não for Brasil, cai automaticamente aqui
        res.innerHTML += `<p style='color:blue;'>Seja muito bem-vindo ao nosso país, espero que sua jornada aqui seja muito agradável!</p>`;
    }
});