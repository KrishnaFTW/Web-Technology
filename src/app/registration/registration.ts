import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration {

  student = {
    name: '',
    email: '',
    password: ''
  };

  register() {

  localStorage.setItem("user", JSON.stringify(this.student));

  alert("Registration successful! Please login.");
  
}

}