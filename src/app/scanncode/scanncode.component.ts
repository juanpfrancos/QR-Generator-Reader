import { Component } from '@angular/core';
import { ScannModuleModule } from '../scann-module/scann-module.module';
import { LOAD_WASM } from 'ngx-scanner-qrcode';


LOAD_WASM().subscribe();
@Component({
  selector: 'app-scanncode',
  standalone: true,
  imports: [ScannModuleModule],
  templateUrl: './scanncode.component.html',
})
export class ScanncodeComponent {
  title = 'QR-Generator-Reader';
  scanQRCodeSuccess(data: string) {
    console.log('QRCode data', data);
  }

}
