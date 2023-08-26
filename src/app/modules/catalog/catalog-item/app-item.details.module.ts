import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemDetailsComponent} from "../../../layouts/catalog/item-details/item-details.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app-item.details.routes";




@NgModule({
  declarations: [ItemDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule,
    ItemDetailsComponent,

  ]
})
export class AppItemDetailsModule { }
