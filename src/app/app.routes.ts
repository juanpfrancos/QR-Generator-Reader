import { Routes } from '@angular/router';
import { ScanncodeComponent } from './scanncode/scanncode.component';
import { GenerateqrComponent } from './generateqr/generateqr.component';

export const routes: Routes = [
  { path: 'scann', component: ScanncodeComponent },
  { path: 'generate', component: GenerateqrComponent }
];
