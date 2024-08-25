import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ProductsService } from '../../../shared/services/products/products.service';
import { Product } from '../../../shared/interfaces/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  allProducts!: Product[]
  name:string ="kkkk kkkk kkk kkk"

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private _ProductsService: ProductsService) { }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('currentPage', '/home')
    }
    this._ProductsService.getAllProducts().subscribe(res => {
      this.allProducts = res.data
    })
    this.name.split(' ').slice(0,5).join(' ')
  }

}
