const cx1 = document.querySelector('#caixa1 ')
const cx2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn_copiar')
const todosCursos = [...document.querySelectorAll('.curso')]

todosCursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const curso =evt.target
        curso.classList.toggle('selecionado')//utilizo o toggle pq ele verifica a classe, se tem a class (selecioando)ao clicar ele tira se nao tem ele colcoca. melhor que utilizar somente o add ou remove
        console.log(curso)
    })
})

btn.addEventListener('click',()=>{
    const cursoSelecionado = [...document.querySelectorAll('.selecionado')]
    const cursoNaoSelecionado = [...document.querySelectorAll('.curso:not(.selecionado)')]// queremos os de class .curso porém não= :not(.selecionado) Define que nao queremos oque tem a class selecioando
    cursoSelecionado.map((el)=>{
    cx2.appendChild(el)// adiciona um filho a cx2 
    })
    cursoNaoSelecionado.map((el)=>{
        cx1.appendChild(el)// adiciona um filho a cx2 
        })
})