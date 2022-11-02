import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 23258767954);
const contaCliente1 = new ContaCorrente(1001, cliente1);

const cliente2 = new Cliente("Alice", 12345678912);
const contaCliente2 = new ContaCorrente(1001, cliente2);

contaCliente2.depositar(1243);
console.log(contaCliente2.saldo);

console.log(ContaCorrente.numeroDeContas)

/* console.log(contaCliente1);
console.log(contaCliente2);

contaCliente1.depositar(1000);
contaCliente2.depositar(178);
contaCliente1.transferir(100, contaCliente2); */


/* const valorDeposito = 100;
contaCliente1.depositar(valorDeposito);
contaCliente1.depositar(valorDeposito);
const valorSaque = 12;
const valorSacado = contaCliente1.sacar(valorSaque); */

/* console.log(valorSacado); */

/* contaCliente1.saldo = 100;
console.log(contaCliente1.saldo);
let sacar = 50;
if(contaCliente1.saldo > sacar){
    contaCliente1.saldo -= sacar;
}
 */
/* const nomeCliente1 = "Ricardo";
const cpfCliente1 = 04267722332;
const agenciaCliente1 = 1001;
const saldoCliente1 =  0;

const nomeCliente2 = "Maria";
const cpfCliente2 = 09876544323;
const agenciaCliente2 = 1001;
const saldoCliente2 =  0; */