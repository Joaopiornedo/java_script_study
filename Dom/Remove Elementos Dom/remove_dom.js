//Remove Elementos Dom:


const cx1 = document.querySelector('#cx1')

const cursos = ['HTML','CSS','JavaScript','PHP','React','Python','NodeJS','Ruby','ReactNative']


cursos.map((el,index)=>{
   
    const novoEl =document.createElement('div')
    novoEl.setAttribute('id','c'+ index)
    novoEl.setAttribute('class','curso c1')
    novoEl.innerHTML=el

    const btn_lix =document.createElement('img') //Criei um elemento img
    btn_lix.setAttribute('src','./lixeira.png')// Passei seu atributo src e o caminho da img
    btn_lix.setAttribute('class','lixeira')// Add a class que ja configurada no css
    btn_lix.addEventListener('click',(event)=>{//Add um evento de click na lixeira
        cx1.removeChild(event.target.parentNode)//Esse event(evento)remove o parentNode(pai)do event(evento)/Explicação: do o event .target eu quero remover o parent o pai .
    })

    cx1.appendChild(novoEl)
    novoEl.appendChild(btn_lix)// Add o btn_lix como filho do novoEl
})