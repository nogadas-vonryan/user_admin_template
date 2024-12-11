import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-manager',
  standalone: true,
  imports: [DatePipe, RouterModule],
  templateUrl: './user-manager.component.html',
  styleUrl: './user-manager.component.css'
})
export class UserManagerComponent {
  userList!: User[];

  constructor(private  http: HttpClient) {
    this.http.get<User[]>('http://localhost:8000/api/admin/users').subscribe({
      next: (response: User[]) => {
        console.log(response);
        this.userList = response;
      },
      error: (error) => {

      }
    });
  }
}

interface User {
  id: number;
  username: string;
  email: string;
  blacklisted: boolean;
  created_at: string;
  updated_at: string;
}