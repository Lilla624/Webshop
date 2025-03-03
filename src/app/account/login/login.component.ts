import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      alert('Login successful');
      // Redirect to dashboard or another page
    } else {
      this.errorMessage = 'Helytelen felhasználónév vagy jelszó';
    }
  }
}
