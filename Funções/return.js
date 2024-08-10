//Return - Retorna algo de uma Função (para fora dela para uso no sistema)obs: return só pode retornar 1 valor

// //Nesse exemplo a função gera um multiplicação e eu retorno o valor de res (resultado da operação)
 function retur(){
    let n1 = 10
     let n2  = 2
    let res = n1*n2
     return res
}
//nesse caso eu chamo dentro do console a função pois a mesma me retorna um valor dela 
console.log(retur())
//posso armazenar esse retorno em uma variavel tbm:
let multi = retur() 
console.log(multi)// nesse caso imprimo no console a variavel 


//Outro meio com if :

function r(){
    let n1 = 10
    let n2  = 2
    let res = n1*n2
    if(res%2==0){
        return 'Par'
    }
    else{
        return 'Impar'
    }
}
console.log(r())