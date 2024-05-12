import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    // ...otros proveedores...
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
})
export class AppComponent {

}
