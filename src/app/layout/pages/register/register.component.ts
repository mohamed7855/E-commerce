import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  errorMessage!: string;
  isLoading: boolean = false;

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^(010|011|012|015)[0-9]{8}$/)]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]),
  }, this.checkRePassword)


  constructor(private _AuthService: AuthService, private _Router: Router) { }

  checkRePassword(g: AbstractControl) {
    if (g.get('password')?.value === g.get('rePassword')?.value) {
      return null
    }
    return { 'passwordMatched': true }
  }

  registerSubmit() {
    this.isLoading = true;
    this._AuthService.sendRegister(this.registerForm.value).subscribe({
      next: (res) => {
        this.errorMessage = '';
        this.isLoading = false;
        this._Router.navigate(['/login']);
      },
      error: (err) => { this.errorMessage = err.error.message; this.isLoading = false },
      complete: () => { console.log('complete'); }
    });

  }
}
