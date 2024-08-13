
// Get By Class Name 

//Retorna um HTMLColection, devemos para melhor trabalhar converter para um array, com o Sprad
const cursoTodos =[...document.getElementsByClassName('curso')]
const cursoc1 =[...document.getElementsByClassName('c1')]
const cursoc2 =[...document.getElementsByClassName('c2')]
const cursoEspecial = document.getElementsByClassName('curso')[5]// pegando o elemento especifico via index[]

console.log(cursoTodos)
console.log(cursoc1)
console.log(cursoc2)
console.log(cursoEspecial)

cursoc2.map((el)=>{//com o map eu mapeio todo bloco de elemento, e defino q el(elemento)que todos el agora ira add a class destaque que esta com important no css para prioridade de exibição dom estilo
    el.classList.add('destaque')//ADD uma classe nova 
})