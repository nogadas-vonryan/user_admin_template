import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserManagerComponent } from './pages/user-manager/user-manager.component';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
    { path:'', component: HomeComponent, pathMatch: 'full' },
    { path:'login', component: LoginComponent },
    { path:'register', component: RegisterComponent },
    { path:'dashboard', component: DashboardComponent, canActivate: [authGuard] },
    { path:'admin', component: UserManagerComponent, canActivate: [authGuard, adminGuard] },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

export default routes;