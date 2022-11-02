import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupança } from "./ContaPoupança.js";

const cliente1 = new Cliente("Ricardo", 23258767954);
const contaCorrenteR = new ContaCorrente(cliente1, 1001);
const contaPoupancaR = new ContaPoupança(50, cliente1, 1001);

contaCorrenteR.depositar(500);

contaCorrenteR.sacar(100);
contaPoupancaR.sacar(10);

console.log(ContaCorrente.numeroDeContas);
console.log(contaCorrenteR);
console.log(contaPoupancaR);
