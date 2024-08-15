
// Dom Referenciação:

const cx1 = document.querySelector('#cx1')
const filho = document.querySelector('#c5')

cx1.children[3].innerHTML='João' // selecionei cx1 e defini o filho de index 3 e alterei o texto dele
cx1.children[3].style.color = 'white' // alterei a cor do texto
cx1.children[3].style.fontSize= '40px'// alterei o tamanho da fonte
cx1.children[3].style.background= 'blue'//alterei a cor de  fundo


/*

Referências no DOM com JavaScript

Filho (Child):

element.children - elemento filho
element.firstElementChild - primeiro elemento filho
element.lastElementChild - ultimo elemento filho

Pai (Parent):
element.parentElement -pai

Irmão (Sibling):
element.nextElementSibling - proximo irmão
element.previousElementSibling - anterior irmão


Ancestral (Ancestor):
element.closest('selector')

Descendente (Descendant):
element.querySelector('selector')
element.querySelectorAll('selector')

*/