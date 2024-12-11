import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  username!: string;
  role!: string;

  constructor(private router: Router, private http: HttpClient) {
    this.http.get('http://localhost:8000/api/me').subscribe({
      next: (response: any) => {
        this.username = response.username;
        this.role = response.role;
        localStorage.setItem('authRole', this.role);
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
