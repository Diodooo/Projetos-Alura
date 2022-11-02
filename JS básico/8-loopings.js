console.log("Trabalhando com loopings");

let cont = 0;
const destino = "São Leopoldo";
let destinoExiste = false;
const idadeComprador = 18;
const estaAcompanhado = true;
const tchongons = idadeComprador >= 18 || estaAcompanhado;

const listaDestinos = new Array("Porto Alegre", "São Leopoldo", "Novo Hamburgo");
console.log("Os destinos são:", listaDestinos);

for (let i = 0;i <= 2; i++) {
    if (listaDestinos[i] == destino) {
        console.log("Destino Valido");
        destinoExiste = true;
        break;
    }
}

if(tchongons == true && destinoExiste == true){
    console.log("Buenas viagens")
}

/* 

if (tchognons) {
    listaDestinos.splice(0, 1);
    ticketComprado = true;
    console.log("Destino Vendido!!!");
    console.log(listaDestinos);
} else {
    ticketComprado = false;
    console.log("Tu é de menor piá, vai te foder pra lá 😂");
}

//EMBARQUE
if(idadeComprador >= 18 && ticketComprado){
    console.log("Vai pra puta QUE TE PARIU VERME")
} else {
    console.log("Ou tu é pobre ou de menor, largar!!!")
} */