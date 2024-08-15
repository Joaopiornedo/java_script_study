
//Stop Propagation:

//Nesse exemplo pego o bloco cx1 que dentro tem os botoes 
//se eu coloco um evento de click na caixa ao clicar nos botoes ele tbm é ativado 
//sendo assim aqui selecionei todos botoes  coloquei um evento de click e no mesmo add o evt.stopPropagation() assim quando clico na no botao o evento dee clique da caixa nao propaga aos botoes:

const cx1 = document.querySelector('#cx1')
const cursos = [...document.querySelectorAll('.curso')]


cursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        evt.stopPropagation()
        
    })
})

cx1.addEventListener('click',(evt)=>{
    console.log('Clicou')
})