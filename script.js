// ANOTAÇÃO:

// Criando Variaveis e convertendo elas para Number :
// Number.parseInt - Number.parseFloat -- conversão numeros
//É possivel utilizar apenas o Number inves de .parsetInt/Float
// Para converter para String : String 
// prompt == input 
// var / let == variaveis

// CÓDIGO:

//var n1 = Number.parseInt(prompt('Digite um número: '))
//var n2 = Number.parseInt(prompt('Digite outro número: '))
//var soma = n1 + n2 
//alert(`A soma de ${n1} + ${n2} de : ${soma}` )

// ANOTAÇÃO:

//alert == um alerta que aparece na tela do usuario
// TEM QUE SE UTILIZAR : `   ` ESSA ACENTUAÇÃO

/* Uma variavel formatada que no python se usa o f aqui se monta dessa forma, Exemplo :

var nome = "João"
var idade = 26
var altura = 1.88
imaginamos estar monatndo um print :
'O aluno ${nome} tem ${idade}anos, e ${altura} de altura'

o resultado seria :
' O aluno João tem 26 anos, e 1.88 de altura '
*/

// EVENTOS :

//manter a variavel pra fora facilita o reconhecimento dela em, todas funções para o elemento especifico a ser modificado:

var a = document.getElementById('area')//fora da função

// criando funções de interação para o elemento main:
function clicar() {
    a.innerText = 'Clicou'
    a.style.background = 'gray'
    a.style.transition = '0.5s'
}
function entrar() {
    a.innerText = 'entrou'
    a.style.background = 'orange'
    a.style.transition = '0.5s'
}
function sair() {
    a.innerText = 'saiu'
    a.style.background = 'red'
    a.style.transition = '0.5s'
}
// NO HTML A EXTRUTURA DEVE SER ESTÁ:
/* 
    <main id="area" onclick="clicar()" onmouseenter="entrar()" onmouseout="sair()">
        Olá Mundo!
        
    </main> */

// PODE SIMPLIFICAR O HTML DESSA FORMA, MANTÉM O PADÃO LA NORMAL:
/* <main id="area">
        Olá Mundo!
    </main> */


//E NO ARQUIVO JS MODIFICA ASSIM/ colocar abaixo da varivel fora das funções  :
 
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)
// a = seria a variavel 
// addEventListener = como se fosse uma lista de evento 
// 'click', clicar) = oque esta a esqueda é o evento sem o on antes , e  a direita a função criada por mim.