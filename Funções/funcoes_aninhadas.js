// Funções aninhadas

//Funções aninhadas utilizar funções dentro de funções:

//Criei uma função armazenada na variavel soma , a mesma é um rest ... indicando que podera receber mais de 2 valores, modelo arrow => dentro dessa função {} passo outra função na mestra extrutura armazenada na variavel somar 

const soma = (...valores)=>{
    const somar = val=>{//Função armazenada na variavel somar com parametro val
        let res=0//essa função 'somar' recebe a variavel  res (resultado=0)
        for(v of val)//crio um for of para percorrer esse array pois recebe mais de 2 valores,
            res+=v//res recebe o valor de v 
            return res//retorna res 
    }
    return somar(valores)// aqui eu nesse comando assim que peço o retorno da função somar (valores)é como se onde esta (const somar = val=>{) o val torna valores e assim val agora é valores fznd a operação,no caso o for dai vai percorrer valores e acrescentar em v e res no final recebe o valor de v , final do codigo retorno o res da função somar 
}
//E no console chamo a primeira função e lhe passo os parametros
console.log(soma(10,5,15))