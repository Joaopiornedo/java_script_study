
function contar() {
    let res = document.querySelector('#res')
    let cx1 = document.querySelector('#start')
    let cx2 = document.querySelector('#finish')
    let cx3 = document.querySelector('#up')
    if(cx1.value.length == 0 || cx2.value.length == 0 || cx3.value.length == 0){
        alert('Preencha todos os campos')
    }else{
        res.innerHTML= 'Contando...'

        let i = Number(cx1.value)
        let f = Number(cx2.value)
        let p = Number(cx3.value)

        if (i < f){
            // contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} `
            }
        }else{
            // contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} `
            }
        }
        
    }
    

}

let bt = document.querySelector('#btn')
bt.addEventListener('click', contar)

