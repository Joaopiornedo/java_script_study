function aluno (nome, nota){
     this.nome= nome
     this.nota=nota

    console.log(nome)
    console.log(nota)
 }
 aluno('João', 100)



//Mesma coisa sem This:
function aluno (nome, nota){
 
    console.log(nome)
    console.log(nota)
}
const aluno1 = aluno('João', 100)
const aluno2 = aluno('Maria', 90)


//Não entendi completamente , achei inutil nos exemplos e confuso.