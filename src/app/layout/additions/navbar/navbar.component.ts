import { AuthService } from './../../../shared/services/auth/auth.service';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isLogin: boolean = false;

  constructor(private _AuthService: AuthService, private _Router: Router) { 
    
  }

  ngOnInit(): void {
    this._AuthService.userData.subscribe(_ => {
      if (this._AuthService.userData.getValue()) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    })
  } 

  logoutSubmit() {
    localStorage.removeItem('userToken');
    this._AuthService.userData.next(null);
    this._Router.navigate(['/login']);
  }
}
