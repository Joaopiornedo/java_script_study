
// Tabuada
var num = 5
var tab = 0
while(tab<=10){
    var soma = num*tab
    console.log(`${num} x ${tab} = ${soma}`)
    tab++
}

// Contagem Regressiva 10 a 1

var nume = 10

while(nume>=1){
    console.log(nume)
    nume--
}

// Fatorial de um Número
// fatorial é o numero (exemplo 5) * o menor no caso 4 * o menor e assim até 1. Exemplo:

// 5*4*3*2*1 =120

let n=5
let fat=1
while(n>1){
    fat*=n
    n--
}
console.log(fat)