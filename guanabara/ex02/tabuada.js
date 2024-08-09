let btn = document.getElementById('btn');

function contar() {
    let num = document.getElementById('num');
    let res = document.getElementById('res');

    if (num.value.length == 0) {
        alert('Digite um número');
    } else {
        let n = Number(num.value);
        res.innerHTML = ''; // Limpa o conteúdo antes de começar
        res.style.opacity = '1';
        for (let t = 0; t <= 10; t++) {
            let soma = n * t;
            let linha = document.createElement('p');
            linha.textContent = `${n} x ${t} = ${soma}`;
            res.appendChild(linha);
        }
    }
}

btn.addEventListener('click', contar);

