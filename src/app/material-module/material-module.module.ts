import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  exports:[    
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule]
})
export class MaterialModuleModule { }
