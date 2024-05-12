import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';


const combinedConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};

const finalConfig = Object.assign({}, appConfig, combinedConfig);

bootstrapApplication(AppComponent, finalConfig)
  .catch((err) => console.error(err));
