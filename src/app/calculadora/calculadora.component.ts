import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  resultado: string;
  calculoFinalizado: boolean;

  constructor() {
    this.resultado = '';
    this.calculoFinalizado = false;
  }

  ngOnInit(): void {
  }

  pulsarBoton(pValue): void {
    // this.resultado = this.resultado + pValue;
    if (this.calculoFinalizado) {
      this.resultado = pValue;
      this.calculoFinalizado = false;
    } else {
      this.resultado += pValue;
    }
  }

  pulsarBotonIgual(): void {
    this.resultado = eval(this.resultado);
    this.calculoFinalizado = true;
  }

  pulsarBotonC(): void {
    this.resultado = '';
  }

} 
