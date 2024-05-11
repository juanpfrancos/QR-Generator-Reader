import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ZXingScannerModule
  ],
  exports: [
    CommonModule,
    ZXingScannerModule
  ]
})
export class ScannModuleModule { }
