
const divs = document.querySelectorAll('.bloco div');

divs.forEach(div => {
    div.addEventListener('mousemove', () => {
        div.style.backgroundColor = 'blue'; // Nova cor
        div.style.width = '250px'; // Novo tamanho (largura)
        div.style.height = '250px'; // Novo tamanho (altura)
    });

    div.addEventListener('mouseout', () => {
        div.style.backgroundColor = 'black'; // Cor original
        div.style.width = '250px'; // Tamanho original (largura)
        div.style.height = '250px'; // Tamanho original (altura)
    });
});
