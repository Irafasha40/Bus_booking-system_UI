import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  resetForm: FormGroup;
  message = '';
  error = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      otp: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.resetForm.invalid) return;

    const { email, otp, newPassword } = this.resetForm.value;
    this.authService.resetPassword(email, otp, newPassword).subscribe({
      next: () => {
        this.message = '✅ Password reset successful';
        this.error = '';
      },
      error: () => {
        this.message = '';
        this.error = '❌ OTP verification failed or expired';
      }
    });
  }
}
