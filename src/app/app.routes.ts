import { Routes } from '@angular/router';
import { ScanncodeComponent } from './scanncode/scanncode.component';
import { GenerateqrComponent } from './generateqr/generateqr.component';
// Definición de las rutas de la aplicación
export const routes: Routes = [
  { path: 'algo', component: ScanncodeComponent }, // Ruta para el componente de inicio
  { path: 'acerca-de', component: GenerateqrComponent } // Ruta para el componente de Acerca de
];
