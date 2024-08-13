//Pegando elementos por Id:
const dc1 = document.getElementById('c1')
const dc2 = document.getElementById('c2')
const dc3 = document.getElementById('c3')
const dc4 = document.getElementById('c4')
const dc5 = document.getElementById('c5')
const dc6 = document.getElementById('c6')

// Criando um Array desses elementos:
const arrayElementos=[dc1,dc2,dc3,dc4,dc5,dc6]//Por ser uma array tenho muitas funções para trabalhar com essa lista (array)

console.log(arrayElementos)


//Pegando elementos por TagName :

const tag = document.getElementsByTagName('div')//aqui ele se torna automaticamente um htmlcolection me deixando limitado para trabalhar , nao tendo muitas funções como por exemplo o map.
console.log(tag)

//Como converter via tagname para array:
// com o método sprad a htmlcolection ja se torna um array podendo a ultização de todas as funções para se trabalhar com arrays.

//const tag = [...document.getElementsByTagName('div')]

