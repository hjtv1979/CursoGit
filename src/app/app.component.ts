import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Importante Propiedades y Metodos
  title = 'angular12';
  dataBinding="Datos bi direccionales"
  getName(){
    console.log("Holka Hector")
  }
}
