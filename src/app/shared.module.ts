
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HashLocationStrategy, LocationStrategy } from '@angular/common'

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule
    ],
    exports: [
        HttpClientModule
    ],
    providers: [
        // ...otros proveedores...
        {provide: LocationStrategy, useClass: HashLocationStrategy}
      ]
})
export class SharedModule { }