class Student {
  private _nome: string;
  private _matricula: number;
  private _notaProva: number[];
  private _notaTrabalho: number[];

  constructor(prova: number[], trabalho: number[]) {
    this._notaProva = prova;
    this._notaTrabalho = trabalho;
  }

  soma() {
    const totalNotas = [...this._notaProva, ...this._notaTrabalho]
    let nota = 0;
    const result = totalNotas.map((e: number, index: number) => nota + e);
    return nota;
  }

  media() {
    const soma = this.soma();
    const notaFinal = soma / this._notaProva.length;
    return notaFinal;
  }
}