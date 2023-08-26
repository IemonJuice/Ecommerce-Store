import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppFooterComponent} from "../../layouts/footer/app-footer.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    AppFooterComponent
  ],
  exports: [
    AppFooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
  ]
})
export class AppFooterModule { }
