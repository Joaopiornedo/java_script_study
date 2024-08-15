//Filter:

const idades = [10,45,62,2,93,17,26,38,57,15]//Criei um Array

//Criei uma variavel que é meu array(idades)com o filter e dentro do mesmo tem um arrow function que retorna valores maiores ou igual a 18
const maiorIdade = idades.filter((val)=>{
    if(val >= 18)
        return val
})
//Criei uma variavel que é meu array(idades)com o filter e dentro do mesmo tem um arrow function que retorna valores menores que 18
const menorIdade = idades.filter((val)=>{
    if(val <= 17)
        return val
})

console.log(idades)//Array completo
console.log(maiorIdade)//Array maiores que 18
console.log(menorIdade)//Array menores que 18

//Outro Exemplo: Criando lista de pares e impares

const n = [0,1,2,3,4,5,6,7,8,9,10]

const n_par= n.filter((v)=>{
    if(v%2===0){
        return v
    }
})

const n_impar= n.filter((v)=>{
    if(v%2!=0){
        return v
    }
})

console.log(n)
console.log(n_par)
console.log(n_impar)