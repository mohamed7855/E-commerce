import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(@Inject(PLATFORM_ID) private platformId:Object) {  }
  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      localStorage.setItem('currentPage', '/home')
    }
  }

}
