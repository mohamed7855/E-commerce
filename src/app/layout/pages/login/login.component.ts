import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  errorMessage!: string;
  isLoading: boolean = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]),
  })

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  

  loginSubmit() {
    this.isLoading = true;
    this._AuthService.sendLogin(this.loginForm.value).subscribe({
      next: (res) => {
        this.errorMessage = '';
        localStorage.setItem('userToken', res.token);
        this._AuthService.getUserData()
        this.isLoading = false;
        this._Router.navigate(['/home']);
      },
      error: (err) => { this.errorMessage = err.error.message; this.isLoading = false },
      complete: () => { console.log('complete'); }
    });

  }
}
