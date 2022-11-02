import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;

    agencia;
    
    #cliente;
    #saldo = 0;

    set cliente(infoCliente){
        if(infoCliente instanceof Cliente){
            this.#cliente = infoCliente;
        }
    }

    get cliente(){
        return this.#cliente;
    }

    get saldo(){
        return this.#saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        if(this.#saldo > valor){
            this.#saldo -= valor;
            console.log(`(SAQUE = R$ ${valor},00) Agora o saldo eh:`, this.#saldo);
            return valor;
        } else {
            console.log("Erro! Você é POBRE. ECA!");
        }
    }

    depositar(valor){
        if(valor < 0){
            console.log("Me diz o porquê do animal ai estar tentando depositar um valor negativo?");
            return;
        }

        this.#saldo += valor;
        console.log(`(DEPOSITO = R$ ${valor},00 ) Agora o saldo eh:`, this.#saldo);
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        console.log(`(TRANSFERÊNCIA = R$ ${valor},00 ) Agora o saldo eh:`, this.#saldo);
        console.log(`(TRANSFERÊNCIA = R$ ${valor},00 ) O alvo recebeu um valor de: ${valorSacado} e ficou com`, conta.#saldo);
    }
}
