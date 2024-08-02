import { ContaRepository } from "../../repository/ContaRepository";
import { Conta } from "../Conta";

export class ContaController implements ContaRepository {
  private listaContas: Array<Conta> = new Array<Conta>();
  numero: number = 0;

  procurarPorNumero(numero: number): void {
    throw new Error("Method not implemented.");
  }
  listarTodas(): void {
    for (let conta of this.listaContas) {
      conta.visualizar();
    }
  }
  cadastrar(conta: Conta): void {
    throw new Error("Method not implemented.");
  }
  atualizar(conta: Conta): void {
    throw new Error("Method not implemented.");
  }
  deletar(conta: Conta): void {
    throw new Error("Method not implemented.");
  }
  sacar(numero: number, valor: number): void {
    throw new Error("Method not implemented.");
  }
  depositar(numero: number, valor: number): void {
    throw new Error("Method not implemented.");
  }
  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    throw new Error("Method not implemented.");
  }
}
