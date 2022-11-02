const botao = document.querySelector('button');
const input = document.querySelector('input');

botao.addEventListener('mouseover', (event) => {
    console.log(input)
    if(input.value != "") return;
    const alvo = event.target.getAttribute('class');
    if(alvo.includes('lg:top-[150px]')){
        event.target.classList.replace("lg:top-[150px]", "lg:top-[80px]");
    } else {
    event.target.classList.replace("lg:top-[80px]", "lg:top-[150px]");
    }
});