//  0:42:42 Rutas en Angular, router-outlet
// cContinuar desede aqui
// https://www.youtube.com/watch?v=i-oYrcNtc2s&t=14299s
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
