const boxMenu = document.querySelector('.box-menu');
const clsMenu = document.getElementById('close-menu-icon');
const icoMenu = document.getElementById('menu-icon');
const icoCarrito = document.getElementById('carrito-icon');
const navegador = document.getElementById('navegador');
const lis = document.querySelectorAll('.item-lista');
icoMenu.onclick = () => {
    boxMenu.style.transform = 'translate(0, 0)';
    icoCarrito.style.display = 'none';
    icoMenu.style.display = 'none'
}
clsMenu.onclick = () => {
    boxMenu.style.transform = 'translate(100%, -100%)';
    icoCarrito.style.display = 'inherit';
    icoMenu.style.display = 'inherit'
}
let clicked = false;
lis.forEach(li => {
    li.addEventListener('click', (e) => {
        boxMenu.style.transform = 'translate(100%, -100%)';
        icoCarrito.style.display = 'inherit';
        icoMenu.style.display = 'inherit'
    })
})