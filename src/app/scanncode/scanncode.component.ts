import { ScannModuleModule } from '../scann-module/scann-module.module'; 
import { Component, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-scanncode',
  standalone: true,
  imports: [ScannModuleModule, MatCardModule, MatButtonModule],
  styleUrls: ['./scanncode.component.css'],
  templateUrl: './scanncode.component.html'
})
export class ScanncodeComponent {
  @ViewChild('scanner', { static: false })
  scanner!: ZXingScannerComponent;

  scannerEnabled: boolean = false;
  desiredDevice: any; 

  toggleScanner(): void {
    this.scannerEnabled = !this.scannerEnabled;
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    const backCamera = devices.find(device => device.label.toLowerCase().includes('back'));
    if (backCamera) {
      this.desiredDevice = backCamera;
    } else {
      this.desiredDevice = devices[0];
    }
  }

  scanSuccessHandler(result: string): void {
    console.log('QR Code scanned:', result);
    alert(result);
    this.scannerEnabled = !this.scannerEnabled;
  }
}
