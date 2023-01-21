const wrapper = document.querySelector('.wrapper');
let startX = 0;
let presionado = false;

wrapper.addEventListener('mousedown', function (e) {
    presionado = true;
    startX = e.clientX
    this.style.cursor = 'grabbing'
})
wrapper.addEventListener('mousemove', function (e) {
    if(!presionado){
        return
    }
    this.scrollLeft += startX - e.clientX
})

window.addEventListener('mouseup', function (e){
    presionado = false
    wrapper.style.cursor = 'grab'
})
wrapper.addEventListener('mouseleave', function (e){
    presionado = false
})