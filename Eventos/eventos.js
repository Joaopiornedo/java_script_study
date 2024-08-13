//Eventos com addEventLister:

const cursos = [...document.querySelectorAll('.curso')]//selecionado todos com class curso, e convertendo com Sprad para um Array
console.log(cursos)//Mostrando no console

cursos.map((el)=>{//Mapeando todo array e dentro da função do map coloquei um  addeventlister de click 
    el.addEventListener('click',()=>{
        el.classList.add('destaque')
        console.log(el.id + ' foi clicado')// especifiquei que assim que clicado o el(elemento) ira me mostrar p id e a msg foi clicado
    })
})

//el(elemento)
//mapeei o array e disse para cada el (elemento)
//el.adiciona o event lister de click 
//sempre que clicar mostre um console.log formatado mostrando o id que foi clicado .

// console.log(el.innerHTML assim mostra o texto inves do id