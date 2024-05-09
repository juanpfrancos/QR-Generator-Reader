import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterOutlet } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { MaterialModuleModule } from './material-module/material-module.module';
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';
import { JsonPipe } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';


// Necessary to solve the problem of losing internet connection
LOAD_WASM().subscribe();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JsonPipe, AsyncPipe, CommonModule, RouterOutlet, HttpClientModule, NgxScannerQrcodeModule, MaterialModuleModule, PokemonListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'QR-Generator-Reader';

  scanQRCodeSuccess(data: string) {
    console.log('QRCode data', data);
  }
}
