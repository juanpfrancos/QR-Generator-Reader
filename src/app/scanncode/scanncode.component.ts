import { Component, OnInit, ViewChild } from '@angular/core';
import { ScannModuleModule } from '../scann-module/scann-module.module';
import { LOAD_WASM } from 'ngx-scanner-qrcode';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-scanncode',
  standalone: true,
  imports: [ScannModuleModule],
  templateUrl: './scanncode.component.html',
})
export class ScanncodeComponent implements OnInit {
  title = 'QR-Generator-Reader';
  scanQRCodeSuccess(data: string) {
    console.log('QRCode data', data);
  }

  @ViewChild(NgxScannerQrcodeComponent) scanner?: NgxScannerQrcodeComponent;
  selectedCameraId: string | null = null;

  async ngOnInit() {
    // Load WASM
    await LOAD_WASM().subscribe();

    // Retrieve stored camera ID from local storage (if available)
    this.selectedCameraId = localStorage.getItem('selectedCameraId');
  }

  async switchCamera() {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const backCamera = devices.find(device =>
        device.kind === 'videoinput' && /back|rear/i.test(device.label)
      );

      if (backCamera) {
        this.selectedCameraId = backCamera.deviceId;
        localStorage.setItem('selectedCameraId', this.selectedCameraId);
        await this.scanner?.playDevice(this.selectedCameraId);
      } else {
        console.warn('Back camera not found');
      }
    } catch (error) {
      console.error('Error accessing camera devices:', error);
    }
  }

  // ... rest of your component logic
}
