// Query Selector: 

// Um seletor mais geral pega tanto por tag , class e id 

const query =document.querySelector('div')//Aqui seleciona apenas a primeira tag div
const queryTodos =document.querySelectorAll('div')//Aqui seleciona todas tag div 
const queryCursos =document.querySelectorAll('.curso')[3]// aqui consigo todos da classe curso porém limitei via [] o elemento de index [3]
const doiselementos =document.querySelectorAll('.c1,p')//Consigo passar mais de dois parametros no query como no exemplo uma class e uma tag p
const filtrar_elementos = document.querySelectorAll('div[class]')// Peguei todas div porém somente as que tem Class
const parent = document.querySelectorAll('div > p')// Peguei todas tag P que tem como parent uma div 


console.log(query)
console.log(queryTodos)
console.log(queryCursos)
console.log(doiselementos)
console.log(filtrar_elementos)
console.log(parent)

//Obs o QuerySelectorAll me retorna um NODELIST em resumo mesma coisa que o HMTLcolection
//podendo alterar isso com o uso do Sprad [...]