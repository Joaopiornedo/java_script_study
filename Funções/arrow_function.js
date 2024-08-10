// Arrow Function

//Extrutura ainda armazena a uma variavel e sua base é : ()=>{}, basicamente os () recebe os parametros o => indica onde ocorre a operação daquela função que é no {}
const variavel = ()=>{}

//Em Arrow function nao necessariamente precisa do return numa operação simples e nem mesmo utilizar o () caso essa função receba somente um valor, e a extrutura fica assim :

// variavel add recebe a função de parametro n que executa a ação de n+10
const add = n => n+10
//chamando no console.log a função add e passando um parametro pra n de 10 , ele entende que n é 10 e a ação é n+10 , resumindo no resultado de 20 no console
console.log(add(10))
//console = 20

// Exemplo sem return:
//Nesse caso nao se necessita do return e nem dos {}
const soma = (v1,v2)=>v1+v2
console.log(soma(20,50))

// Exemplo com return:
const som = (v1,v2)=>{
    let res=v1+v2
    return res
}
console.log(som(20,30))
