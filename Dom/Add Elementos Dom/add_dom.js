//ADD Elementos :

//Peguei o container cx1 para add os elementos nele :
const cx1 = document.querySelector('#cx1')
//Criando um array para add a cx1
const cursos = ['HTML','CSS','JavaScript','PHP','React','Python','NodeJS','Ruby','ReactNative']

//Percorro o array passando dois parametros o el(elemento) e o index
cursos.map((el,index)=>{
    //Crio um const de novoEle e defino que será uma div
    const novoEl =document.createElement('div')//para criar um elemento basta utilizar o createElement('')e passar oque ele será porexemplo uma div
    novoEl.setAttribute('id','c'+ index)//Utilizei o index do elemento a meu favor para que o elemento tenha id de 'c' acrecentado do numero do index
    novoEl.setAttribute('class','curso c1')//Com o setAttribute consigo definir o id ou class no primeiro valor e no segundo o valor do mesmo
    novoEl.innerHTML=el//Defini que todo texto sera do el(no caso o elemento do meu array)
    cx1.appendChild(novoEl)//add o filho (novoEL)
})