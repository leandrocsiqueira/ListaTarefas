import { Component } from '@angular/core';
import { Tarefa } from './class/tarefa';
import { ListaDeTarefas } from './class/lista-de-tarefas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  exibirTarefasFinalizadas: boolean = false;

  private listaDeTarefas = new ListaDeTarefas('Usuário X', [
    new Tarefa('Tarefa 1', true),
    new Tarefa('Tarefa 2'),
    new Tarefa('Tarefa 3'),
    new Tarefa('Tarefa 4'),
  ]);

  get usuario(): string {
    return this.listaDeTarefas.usuario;
  }

  get quantidadeDeTarefas(): number {
    return this.listaDeTarefas.tarefas.filter((tarefa) => !tarefa.finalizada)
      .length;
  }

  get tarefas(): readonly Tarefa[] {
    return this.listaDeTarefas.tarefas.filter(
      (tarefa) => this.exibirTarefasFinalizadas || !tarefa.finalizada
    );
  }

  incluirTarefa(novaTarefa: string) {
    if (novaTarefa !== '') {
      this.listaDeTarefas.incluirTarefa(novaTarefa);
    }
  }
}
