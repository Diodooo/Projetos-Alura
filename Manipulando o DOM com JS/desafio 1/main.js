const botao = document.querySelectorAll('[data-botao]');
const lista = document.querySelectorAll('[data-lista]');

botao.forEach( (element) => {
    element.addEventListener('click', (event) => {
        clickCallback(event.target.classList);
    })
})

function clickCallback (data) {

    if(data == "hide"){
        const fodase2 = () => {lista.setAttribute("data-lista", "hide");} 
        console.log()
    } 
    if (data == 'show'){
       const fodase = () => {lista.setAttribute("data-lista", "show");} 
    }
}