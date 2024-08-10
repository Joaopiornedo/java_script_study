//Funções Parametrizadas:

//parametrização seria passar o parametro nOS ()
// Nesse exemplo é passado um parametro (n1) e dentro da minha função eu quero que ela de um console.log , sendo assim sempre que chamar a função e colocar um parametro o valor de n1 será o valor que passei nos () na chama da função
function soma (n1){
    console.log(n1)
}
soma(5)

// Exemplo com mais parametros:
function multiplicar (n1,n2){
    console.log(n1*n2)
}
multiplicar(5)// Nesse exemplo como passei somente um valor ele defini o outro como indefinido ou no caso como NaN

multiplicar(2,10)// Aqui ele conclui e faz a multiplicação

//Corrigindo valores nao definidos 

function subtrair (n1=0,n2=0){//aqui defino que o valor padrão de n1 e n2 será de 0 assim quando se passar somente um valor nao avera erro e ele irá concluir a conta da função.
    console.log(n1-n2)
}
subtrair()