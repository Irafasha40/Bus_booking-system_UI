import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-password-reset',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './request-reset.component.html',
  styleUrl: './request-reset.component.css'
})
export class RequestResetComponent {
  resetForm: FormGroup;
  message = '';
  error = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.resetForm.invalid) return;

    this.authService.requestPasswordReset(this.resetForm.value.email).subscribe({
      next: () => this.message = 'OTP sent to your email.',
      error: () => this.error = 'Failed to send OTP. Try again.'
    });
  }

}
