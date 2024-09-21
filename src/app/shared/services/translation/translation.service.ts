import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  defaultLang = 'en';

  constructor(
    private _TranslateService: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this._TranslateService.setDefaultLang(this.defaultLang);
      this.setLang();
    }
  }

  setLang() {
    const savedLang = localStorage.getItem('lng');
    if (savedLang) {
      if (savedLang == 'en') {
        this.defaultLang = 'en';
        document.body.dir = 'ltr';
      } else if (savedLang == 'ar') {
        this.defaultLang = 'ar';
        document.body.dir = 'rtl';
      }
      this._TranslateService.use(this.defaultLang);
    }
  }
}
