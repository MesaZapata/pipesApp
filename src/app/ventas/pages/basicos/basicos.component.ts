import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

 nombreLower: string = 'samuel';
 nombreUpper: string = 'SAMUEL';
 nombreCompleto: string = 'sAmuEl mEsA';

 fecha: Date = new Date();

}
