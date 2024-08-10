//Função Anonima
// Se armazena a uma variavael nao fica salva na memoria do programa 
const x = function(v1,v2){
    return v1+v2
}
console.log(x(2,10))


//Utilizando os Sprad
const y = function(...valores){
    let res=0
    for(v of valores){
        res+=v
    }
    return res
}
console.log(y(5,10))


//Função Construtor 

//utilizada para pequenas operações

// Extrutura continua anonima , porem agora se coloca o new e o Function deve ter o f maiusculo , dentro do () passar tudo em aspas, sendo o ultimo bloco a ação da função no caso o return do v1+v2+v3 
const f = new Function ('v1','v2','v3','return v1+v2+v3')
// sendo assim com console.log passo a função , chamando a variavel f e dentro os parametros para a função
console.log(f(5,10,15))