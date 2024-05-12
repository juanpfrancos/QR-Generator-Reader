import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule
    ],
    exports: [
        HttpClientModule,
        CommonModule
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ]
})
export class SharedModule { }
