// Função Geradoras 

//Sintax uso padrão de function porém com o * para indicar com função geradora
// Yield é como se fosse um retorno

function * cores (){
    yield 'vermelho'
    yield 'azul'
    yield 'amarelo'
}

const cor = cores()//Armazenei a função em uma const

//Ao chamar a função a cada vez que chamo ela identifica onde ela parou na chamada anterior e segui oque a dentro dela até que nao tenha mais nada a ser executado.

// Se eu chamar no console somente a cor ela vai me retornar uma função geradora no console entao com o uso do next eu determino a ela para começão pós isso que no caso seria no primeiro tield dentro da função no caso o 'vermelho', o value se refere ao valor do primeiro yield.
console.log(cor.next().value)
console.log(cor.next().value)
console.log(cor.next().value)
console.log(cor.next().value) // Console = undefined pois nao tem mais oque executar

//Usando Variaveis dentro de Funções Geradoras:

//Nesse caso armazenamos dentro de const perguntas que será exibidas quando chamada a função
function* perguntas(){
    const nome = yield 'Qual seu nome?'
    const idade = yield 'Qual sua idade?'
    const nacionalidade = yield ' Qual sua nacionalidade?'
    return 'Seu nome é ' + nome + ', sua idade é ' + idade + ', sua nacionalidade é ' + nacionalidade
}
// Pedi para retornar uma string formatada com os dados

//OBS: Não estou pegando os dados e por isso na chamada do console.log devo informar os dados:
const perg= perguntas()
console.log(perg.next().value)// chama a função geradoras as perguntas
console.log(perg.next('João').value)//defino que para a primeira pergunta sera joao
console.log(perg.next('25').value)//defino que para a segunda pergunta sera 25
console.log(perg.next('Brasileiro').value)//defino a nacionalidade para a terceira pergunta

// Usando loop na Função Geradora:

function* contador(){
    let i=0
    while(true){
        yield i ++
    }
}
const cont= contador()
console.log(cont.next().value)//Retorna 0
console.log(cont.next().value)//Retorna 1
console.log(cont.next().value)//Retorna 2
console.log(cont.next().value)//Retorna 3
console.log(cont.next().value)//Retorna 4
console.log(cont.next().value)//Retorna 5