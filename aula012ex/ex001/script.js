function calcular() {
    var txtv = document.getElementById('txtval')
    //mudamos o alvo diretamente para a section de resposta

    var res = document.getElementById('res')
   
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade é de <strong>${vel}</strong> km/h</p>`

    if ( vel > 110) {
        res.innerHTML += `<p style='color: red;'>Você está acima da velocidade permitida você foi <strong>MULTADO!!</strong></p>`
    }
    
    else {
        res.innerHTML += `<p style="color: green;">Dirija com atenção, use cinto de segurança</p>`
    }
}

function limparCampo() {
  // Busca o input pelo ID e esvazia o valor dele
  document.getElementById('txtval').value = '';
}