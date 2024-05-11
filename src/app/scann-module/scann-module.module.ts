import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxScannerQrcodeModule,
  ],
  exports: [
    CommonModule,
    NgxScannerQrcodeModule
  ]
})
export class ScannModuleModule { }
