import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ScannModuleModule } from '../scann-module/scann-module.module'; 

@Component({
  selector: 'app-scanncode',
  standalone: true,
  imports: [ScannModuleModule],
  templateUrl: './scanncode.component.html',
})
export class ScanncodeComponent{

}
