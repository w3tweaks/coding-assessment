import { NgModule } from '@angular/core';
import { CommonFooterComponent } from './common-footer/common-footer';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CommonFooterComponent
    ],
    exports: [
        CommonFooterComponent
    ]
})
export class ComponentModules {}
