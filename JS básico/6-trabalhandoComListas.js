console.log("TCHONGONS = Vamos enfiar coisa em Array, YES!!");

/* const portoAlegre = "Porto Alegre";
const saoLeopoldo = "São Leopoldo";
const novoHamburgo = "Novo Hamburgo";

console.log(portoAlegre, saoLeopoldo, novoHamburgo);*/

const listaDestinos = new Array("Porto Alegre", "São Leopoldo", "Novo Hamburgo");
console.log(listaDestinos);

listaDestinos.push("Uruguaiana");
console.log(listaDestinos);

listaDestinos.splice(0,1);
console.log(listaDestinos);

console.log(listaDestinos[1]);
console.log(listaDestinos[listaDestinos.indexOf(`Novo Hamburgo`)]);
