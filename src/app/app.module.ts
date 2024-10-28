import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Para usar ngModel
import { AppRoutingModule } from './app-routing.module'; // Importar o módulo de roteamento
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; // Importar o componente de login

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent // Certifique-se de que o LoginComponent esteja listado aqui
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Para usar ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
