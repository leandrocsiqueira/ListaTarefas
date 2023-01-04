import { Tarefa } from './tarefa';
export class ListaDeTarefas {
  constructor(public usuario: string, private tarefasAFazer: Tarefa[] = []) {}

  get tarefas(): readonly Tarefa[] {
    return this.tarefasAFazer;
  }

  incluirTarefa(novaTarefa: string) {
    this.tarefasAFazer.push(new Tarefa(novaTarefa));
  }
}
