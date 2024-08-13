//Map

//Optar em utilizar o Map ivés do for sempre que : precisar percorrer o array e manipular o mesmo , pois é um método mais otmizado de trabalhar 

// Code
//const cursos = ['Html', 'Css', ' JavaScript', 'PhP', 'React']

//map primeiro parametro passado em () será o elemento html, css ... 
//o segundo parametro será o index de cada elemento

// O mesmo deve estar dentrop de um afunção no caso utilizado uma rrow function que recebe o el ( elemento, e  o i ( index do elemento ), essa função retorna um console.log formatado com a descrição do elemento e do index dele)


// Code
// cursos.map((el,i)=>{
//     console.log('Curso ' + el + ' Posição ' + i)
// })

// Retorno console:
// Curso Html Posição 0
// Curso Css Posição 1
// Curso  JavaScript Posição 2
// Curso PhP Posição 3
// Curso React Posição 4

//Utilizando o Método Map para manipulação do Dom de forma Simples :

//CODE:

let elemento =document.getElementsByTagName('div')
elemento=[...elemento]//definindo como um elemento iteravel com o metodo sprad
elemento.map((e,i)=>{ // utilizando o map dentro coloco uma arrow function, definindo e(elemento, i(index))
//     //e.innerHTML ='João'// Se eu quiser alterar o html de cada div basta tirar o console e editar assim
     console.log(e.innerHTML)// essa função me retorna cada elemento desse array 
//     // no console:
//     // <div>Html</div>
//     //Se eu fizer assim  console.log(e.innerHtml) ele me mostra somente o conteudo , exemplo : html ...

})

//Outra forma  seria :

//Code:
//const el =document.getElementsByTagName('div')
//const val = Array.prototype.map.call(el,({innerHTML})=>innerHTML)

// Assim eu faço a operaçãod de forma direta
//o intuito seria o mesmo me retornar o inner html de cada div
//console.log(val)

//Porém no console a exibição fica como array


//Usando Map para coinverter itens de um array
const convertertInt=(e)=>parseInt(e)
const dobrar=(e)=>e*2
let n = ['1','2','3','4','5'].map(dobrar)//mencionando no map oque ele vai rodar no caso dobrar ele recebe o elemento e retorna o elemento * 2 no console a lista aparece dobrada.
console.log(n)

//converte para inteiros