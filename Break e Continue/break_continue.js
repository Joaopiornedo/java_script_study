//Break

let n = 0
let max =1000

while(n<max){
    console.log('Aprendendo Break ' + n)
    if(n>=10){
        break
    }
    n++
}
console.log('Fim do Programa')

// Com o break se é possivel quebrar um loop e seguir o programa no exemplo o programa avalia que sim n é menor que 1000 e vai iterando mais 1 no n ( n++ ), porém assim que através do if ele percebe que sim n é >=10 ele quebra o loop por conta do break.



// Continue
let nu = 0
let m =1000
let pares = 0

for(let i = nu; i<m ; i++){
    if(i%2!=0){ // se o resto de i for diferente de 0..
        continue
    }
    pares++
}
console.log('Quantidade de Pares ' + pares)
console.log('Fim do Programa / Continue')

// Basicamente aqui estou contando a quantidade de pares na contagem do loop no caso de 0 a 999.
// O sistema esta assim ele faz a opreção i é menor que m(1000) sim! itera mais um porem ele avalia atraves do if se o i que agora é vale 1 o resto é 0 se der false ele nao itera no pares que tem inicio em 0.
// ataraves do continue ele segue o programa ate que o loop for seja falso.

