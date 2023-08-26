import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppHeaderComponent} from "../../layouts/header/app-header.component";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [AppHeaderComponent],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports:[
    AppHeaderComponent
  ]
})
export class AppHeaderModule { }
