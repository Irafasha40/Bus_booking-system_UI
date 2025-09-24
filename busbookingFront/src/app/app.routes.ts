import { Routes } from '@angular/router';
import { RequestResetComponent } from './auth/password-reset/request-reset.component';
import { ResetPasswordComponent } from './auth/password-reset/reset-password.component';
import { LoginComponent } from './auth/login/login.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: RequestResetComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: '**', redirectTo: 'login' } // fallback
];
