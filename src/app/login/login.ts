import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginData = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  login() {

    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      alert("User not registered! Please register first.");
      this.router.navigate(['/register']);
      return;
    }

    const user = JSON.parse(storedUser);

    if (
      user.email === this.loginData.email &&
      user.password === this.loginData.password
    ) {
      alert("Login successful!");
    } else {
      alert("Invalid email or password");
    }

  }

}