import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onLogin() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Aqui você pode adicionar a chamada à API de login
  }
}
