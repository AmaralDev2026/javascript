function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!!')
    } else {
        let n = Number(num.value)//string para valor numérico
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`//seleciona um numero "opcional em js"
            tab.appendChild(item)
            c++
        }
    }
}

function limpar() {
    // 1. Corrija os IDs para 'txtn' e 'seltab'
    document.getElementById('txtn').value = '';
    document.getElementById('seltab').innerHTML = ''; // Limpa as opções do select
    document.getElementById('txtn').focus(); // Volta o cursor para a caixa de texto
}