export class Conta{
    constructor(saldoInicial,  cliente, agencia ){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(infoCliente){
        if(infoCliente instanceof Cliente){
            this._cliente = infoCliente;
        }
    }
  
    get cliente(){
        return this._cliente;
    }

    get saldo2(){
        return this._saldo;
    }

    sacar(valor) {
        const taxa = 1;
        return this._sacar(valor, taxa);
    }

    _sacar(valor, taxa){
        let valorSacado = valor * taxa;
        if(this._saldo > valorSacado){
            this._saldo -= valorSacado;
            console.log(`(SAQUE = R$ ${valorSacado},00) Agora o saldo eh:`, this._saldo);
            return valorSacado;
        } else {
            console.log("Erro! Você é POBRE. ECA!");
        }
    }

    depositar(valor){
        if(valor < 0){
            console.log("Me diz o porquê do animal ai estar tentando depositar um valor negativo?");
            return;
        }

        this._saldo += valor;
        console.log(`(DEPOSITO = R$ ${valor},00 ) Agora o saldo eh:`, this._saldo);
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        console.log(`(TRANSFERÊNCIA = R$ ${valor},00 ) Agora o saldo eh:`, this._saldo);
        console.log(`(TRANSFERÊNCIA = R$ ${valor},00 ) O alvo recebeu um valor de: ${valorSacado} e ficou com`, conta._saldo);
    }
}