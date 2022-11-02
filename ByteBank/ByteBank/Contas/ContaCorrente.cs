using ByteBank.Clientes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByteBank.Contas
{
    public class ContaCorrente
    {
        public static int ContasCriadas { get; private set; }
        private short numeroAgencia;
        public short NumeroAgenica {
            private set {
                if ( value > 0 ) {
                    this.numeroAgencia = value; 
                }
            }
            get { return this.numeroAgencia; }
        }

        public string Conta { get; set; }
        private double saldo;
        public Cliente Titular { get; set; }
      
        public void Depositar(double valor)
        {
            saldo += valor;
            Console.WriteLine("Ação de depósito realizada --> Valor: " + valor + ", Saldo atual:" + saldo);
        }
        public void Sacar(double valor)
        {
            if (valor <= saldo)
            {
                saldo -= valor;
                Console.WriteLine("Ação de saque realizada --> Valor: " + valor + ", Saldo atual:" + saldo);
                return;
            }
            Console.WriteLine("Saldo insuficiente para executar esta operação");
        }

        public void Transferencia(double valor, ContaCorrente destino)
        {
            Sacar(valor);
            destino.Depositar(valor);
        }

        public void SetSaldo(double valor) {
            if(valor > 0) {
                this.saldo = valor;
            }
        }

        public double GetSaldo() {
            return this.saldo;
        }

        public ContaCorrente(string Conta, short numeroAgencia) {
            this.Conta = Conta;
            this.NumeroAgenica = numeroAgencia;
            this.Titular = new Cliente();
            ContasCriadas++;
        }

        public void GetInformacao () {
            Console.WriteLine("- Nome: " + this.Titular.Nome);
            Console.WriteLine("- CPF: " + this.Titular.Cpf);
            Console.WriteLine("- Profissão: " + this.Titular.Profissao);
            Console.WriteLine("- Numero da Agencia: " + this.NumeroAgenica);
            Console.WriteLine("- Conta: " + this.Conta);
            Console.WriteLine("- Saldo: " + this.GetSaldo());
        }


    }
}
