let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}

function limpar() {
    valores = [] // Zera o vetor
    lista.innerHTML = '' // Limpa o elemento select na tela
    res.innerHTML = '' // Limpa a div de resultados
}

/* 
Estas funções foram criadas por motivos de validação de dados para um projeto clássico de Analisador de Números (geralmente visto no curso de JavaScript do professor Gustavo Guanabara no Curso em Vídeo). 

Elas estão diretamente ligadas à função adicionar() para garantir que o usuário digite apenas números válidos e não adicione duplicatas.

Confira o detalhamento de cada uma:1. function isNumero(n)Para que serve: Verifica se o valor digitado está dentro do intervalo permitido (entre 1 e 100).

Porque foi criada: Evita que o usuário insira campos vazios, letras ou números fora da regra de negócio do programa.

Em quem está ligada: Está ligada à primeira parte da condição dentro da função adicionar():if(isNumero(num.value) && !inList(num.value, valores))2. 

function inList(n, l)Para que serve: Checa se o número já existe dentro do array/lista (valores).

Como funciona: Usa o método indexOf(). Se ele retornar um valor diferente de \(-1\), 
significa que o número já foi cadastrado.

Porque foi criada: Impede que o mesmo número apareça duplicado na sua caixa de seleção (<select>).

Em quem está ligada: Está ligada à segunda parte da condição em adicionar() através do operador lógico de negação ! (que significa "não").
*/