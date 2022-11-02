using ByteBank.Clientes;
using ByteBank.Contas;

Console.WriteLine("Bem vindo ao programa de cadastro do banco ByteBank!");
Console.Write("Informe seu nome: ");
string nome = Console.ReadLine();
ContaCorrente conta = new ContaCorrente("1245-X", 12);
conta.Titular = new Cliente();
conta.Titular.Nome = nome;
Console.WriteLine("Muito bem " + conta.Titular.Nome + ", agora nos informe seu CPF e em seguida sua profissão: ");
Console.Write("CPF: ");
string cpf = Console.ReadLine();
conta.Titular.Cpf = cpf;
Console.Write("Profissão: ");
string profissao = Console.ReadLine();
conta.Titular.Profissao = profissao;
Console.WriteLine("Aguarde enquanto fazemos mais algumas configurações...");
//Nenhuma configuração está sendo feita :)
Thread.Sleep(1500);
Console.WriteLine(@"Gostaria de depositar um valor inicial?
- 0 = Não
- 1 = Sim");
string valInicial = Console.ReadLine();
if (valInicial == "1") {
    Console.Write("Informe o valor: ");
    double valor = double.Parse(Console.ReadLine());
    conta.SetSaldo(valor);
} else {
    Console.WriteLine("Tudo bem então!");
}
Console.WriteLine("Conta Finalizada!");
Console.WriteLine("Abaixo estão suas informações: ");
conta.GetInformacao();

Console.WriteLine("Pressione ENTER para sair...");
Console.ReadLine();

//ContaCorrente contaDoAndre = new ContaCorrente("1245-X", 12);
//contaDoAndre.Titular = new Cliente();
//contaDoAndre.Titular.Profissao = "Marceneiro";
//Console.WriteLine(ContaCorrente.ContasCriadas);







