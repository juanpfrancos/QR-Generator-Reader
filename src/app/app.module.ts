import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Se añade la importación de RouterModule
import { AppComponent } from './app.component';
import { SharedModule } from './shared.module';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(routes) // Se añade RouterModule.forRoot con las rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
