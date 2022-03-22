import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

const matModules = [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule
]

@NgModule({
    declarations:[],
    imports:matModules,
    exports:matModules
})

export class MaterialModule { }