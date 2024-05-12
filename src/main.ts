import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app/app.routes';


const combinedConfig = {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideHttpClient()
  ]
};

const finalConfig = Object.assign({}, appConfig, combinedConfig);

bootstrapApplication(AppComponent, finalConfig)
  .catch((err) => console.error(err));
