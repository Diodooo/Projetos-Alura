//Javascript é uma gambiarra do c@r@lh0
 
const listaDeTeclas = document.querySelectorAll('.tecla');              //return every input with the class .tecla in a list format

function tocaSom(idElementoAudio) {                                     //receive the input and plays the sound attached to it
    const elemento = document.querySelector(idElementoAudio);           //takes the respective sound with the id recived in the argument and plays its sound  
    
    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log("Elemento não encontrado"); 
    }
}

for (let cont = 0; cont < listaDeTeclas.length;cont++){                 //while cont is lower than the number of itens in the input list

    const tecla = listaDeTeclas[cont];                                  //receive the html input with all its classes and id's
    const instrumento = tecla.classList[1];                             //instrumento is equal to the second class from the iten maintained in tecla --> tecla, tecla_pom                                          
    const idAudio = `#som_${instrumento}`;                              //Takes the class recived in instrumento adds up #som_ to it and turns all to a string --> template string 

    tecla.onclick = function () {tocaSom(idAudio)}                      //When a respective key is pressend on-screen calls tocaSom with the string previusly modified as argument    
    
    tecla.onkeydown = function (evento) {
        if(evento.code === 'Space' || evento.code === 'Enter'){
            listaDeTeclas[cont].classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        listaDeTeclas[cont].classList.remove('ativa');
    }
}


