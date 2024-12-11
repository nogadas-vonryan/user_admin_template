import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      password_confirmation: ['', [Validators.required]]
    });
  }

  onSubmit() {
    console.log("Pressed");
    console.log('Form Submitted', this.registerForm.value);

    this.http.post('http://localhost:8000/api/register', this.registerForm.value).subscribe({
      next: (response) => {
        console.log('register successful', response);
        this.router.navigate(['login']);
      },
      error: (error) => {
        console.error('register failed', error);
      }
    });
  }
}