import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  username!: string;

  constructor(private router: Router, private http: HttpClient) {
    this.http.get('http://localhost:8000/api/me').subscribe({
      next: (response: any) => {
        this.username = response.username;
        localStorage.setItem('authRole', response.role);
      },
      error: (error) => {

      }
    });
  }
  
  user() {
    
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
