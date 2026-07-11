/*
Inicio  id = txti
Fim id = txtf
Passso id = txtp
div id = res
*/
function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!!'
        //window.alert('[ERRO] Faltam dados!!')
    } else {
        res.innerHTML = 'Contando: '

        // converte de string para valor numerico
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0 ) {
            window.alert('Passo inválido! Considerar passo 1')
            p = 1
        }
        if(i < f){
            //cointagem crescente
            for(let c = i; c <= f; c += p ){
                res.innerHTML += `${c} \u{1F449}` /* U+1F449 => \u{1F449} em js tem que fazer essa mudança*/
            }
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}` /* U+1F449 => \u{1F449} em js tem que fazer essa mudança*/
            }   
        }
        res.innerHTML += `\u{1F3F4}` //emoji da bandeirinha
    }

}

function limpar() {
    document.getElementById('txti').value = '';
    document.getElementById('txtf').value = '';
    document.getElementById('txtp').value = '';
    document.getElementById('res').innerHTML = 'Preparando para contar...'
}









