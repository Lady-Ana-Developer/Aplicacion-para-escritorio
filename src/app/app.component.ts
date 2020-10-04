import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numeros: number[];
  tipoInput: string;

  constructor() {
    this.numeros = [15, 30, 45, 50, 60];
    this.tipoInput = 'password';
  }

  onTerminaCronometro($event) {
    console.log($event);
  }
}
