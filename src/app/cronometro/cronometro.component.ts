import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  // Outputs
  // 1 - Definir el output
  @Output() terminaCronometro: EventEmitter<string>;

  // Inputs
  @Input() inicio: number;

  // Propiedades de la clase
  contador: number;

  constructor() {
    this.contador = 10;
    // 2 - inicializamos el output
    this.terminaCronometro = new EventEmitter();
  }

  ngOnInit(): void {
    this.contador = this.inicio ? this.inicio : 10;
  }

  arrancaContador() {
    let interval = setInterval(() => {
      this.contador--;
      if (this.contador < 0) {
        clearInterval(interval);
        this.contador = this.inicio;
        // 3 - Lanzamos el evento
        this.terminaCronometro.emit('Finaliza el cronómetro');
      }
    }, 1000);
  }

}