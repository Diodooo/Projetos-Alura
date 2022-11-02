console.log("Trabalhando com condições e operadores");

const idadeComprador = 18;
const estaAcompanhado = false;
const ticketComprado = true;

const listaDestinos = new Array("Porto Alegre", "São Leopoldo", "Novo Hamburgo");
console.log("Os destinos são:", listaDestinos);

/* if (idadeComprador >= 18) {
    listaDestinos.splice(0, 1);
    console.log("Destino Vendido!!!");
    console.log(listaDestinos);
} else if (estaAcompanhado) {
    listaDestinos.splice(0, 1);
    console.log("Destino Vendido!!!");
    console.log(listaDestinos);
} else {
    console.log("Tu é de menor piá, vai te foder pra lá 😂");
} */

if (idadeComprador >= 18 || estaAcompanhado) {
    listaDestinos.splice(0, 1);
    console.log("Destino Vendido!!!");
    console.log(listaDestinos);
} else {
    console.log("Tu é de menor piá, vai te foder pra lá 😂");
}

//EMBARQUE
if(idadeComprador >= 18 && ticketComprado){
    console.log("Vai pra puta QUE TE PARIU VERME")
} else {
    console.log("Ou tu é pobre ou de menor, largar!!!")
}