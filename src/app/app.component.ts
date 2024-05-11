import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterOutlet } from '@angular/router';
import { ScanncodeComponent } from './scanncode/scanncode.component';
import { MaterialModuleModule } from './material-module/material-module.module';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule,MaterialModuleModule, ScanncodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
