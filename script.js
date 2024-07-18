// Criando Variaveis e convertendo elas para Number :
// Number.parseInt - Number.parseFloat -- conversão numeros
//É possivel utilizar apenas o Number inves de .parsetInt/Float
// Para converter para String : String 
// prompt == input 
// var / let == variaveis
var n1 = Number.parseInt(prompt('Digite um número: '))
var n2 = Number.parseInt(prompt('Digite outro número: '))
var soma = n1 + n2 
//alert == um alerta que aparece na tela do usuario
alert(`A soma de ${n1} + ${n2} de : ${soma}` )
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