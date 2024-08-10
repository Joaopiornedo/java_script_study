// For in

// Nesse codigo retorna o index do array
let num = [10,20,30,40,50]

for(n in num){
    console.log(n)
}

// Nesse codigo retorna o elemento do array
let nu = [10,20,30,40,50]

for(n in nu){
    console.log(nu[n])
}
// Com o for in devemos passar pra ele em []nesse caso o n para que ele pegue os elementos e nao o index




// For Of
let nume = [10,20,30,40,50]

for(n of nu){
    console.log(n)
}
// Com o for of ele ja pega de fato os elementos do array


// Uma maneira de usar de usar o for of e interar um valor de um item em html seria :

/* imagine 3 div com a class = obj  quero alterar o texto de todas poderia fazer dessa forma :

let obj= document.queryselector('.obj')

for(o of obj){
    console.log(o.innerhtml='Texto novo ')
}


*/