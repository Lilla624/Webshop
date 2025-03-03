import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  model = {
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    password: '',
    confirmPassword: ''
  };

  onSubmit() {
    if (this.model.password === this.model.confirmPassword) {
      console.log('Regisztráció sikeres!', this.model);
      // További regisztrációs logika ide
    } else {
      console.log('A jelszavak nem egyeznek!');
    }
  }
}
