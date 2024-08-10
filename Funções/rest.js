// Parametro Rest

//Rest é definido com 3 pontos antes do parametro da função dizendo assim que, aquela função recebe ou poderá receber mais de 2 valores
function soma (...valores){
    let res =  0 // variavel resultado
    for(let v of valores){
        res+=v // valor de res que iniciou em 0 agora recebe o valor de v 
    }
    return res
}
console.log(soma(5,5,5,5))

