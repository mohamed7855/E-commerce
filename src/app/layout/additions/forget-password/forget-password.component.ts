import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {

  showCodeForm: boolean = false
  showResetPasswordForm: boolean = false
  isLoading: boolean = false;

  constructor(private _AuthService: AuthService, private _Router:Router) { }

  emailForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  });

  codeForm: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required])
  });

  resetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)])
  });

  verifyEmail() {
    this.isLoading = true
    this._AuthService.verifyEmail(this.emailForm.value).subscribe({
      next: (res) => {
        if (res.statusMsg == "success") {
          this.showCodeForm = true;
          this.showResetPasswordForm = false
          this.isLoading = false
        }
      },
      error: (err) => {
        this.isLoading = false
        console.log(err.message);
      }
    })
  }

  checkCode() {
    this.isLoading = true
    this._AuthService.verifyResetCode(this.codeForm.value).subscribe({
      next: (res) => {
        if (res.status == "Success") {
          this.showCodeForm = false;
          this.showResetPasswordForm = true
          this.isLoading = false
        }
      },
      error: (err) => {
        this.isLoading = false
        console.log(err.message);
      }
    })
  }

  resetPassword() {
    this.isLoading = true
    this._AuthService.resetPassword(this.resetPasswordForm.value).subscribe({
      next: (res) => {
        localStorage.setItem("userToken", res.token);
        this._AuthService.getUserData()
        this._Router.navigate(['home'])
        this.isLoading = false
      },
      error: (err) => {
        this.isLoading = false
        console.log(err.message);
      }
    })
  }
}
