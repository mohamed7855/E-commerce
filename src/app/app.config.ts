import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { headerInterceptor } from './shared/interceptors/header/header.interceptor';
import { errorInterceptor } from './shared/interceptors/errors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withViewTransitions()), provideClientHydration(),importProvidersFrom(HttpClientModule, RouterModule, BrowserAnimationsModule), provideAnimations(), provideToastr(), provideHttpClient(withInterceptors([headerInterceptor, errorInterceptor]))]
};
