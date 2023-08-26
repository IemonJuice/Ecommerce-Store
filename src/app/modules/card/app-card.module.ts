import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from "../../layouts/card/card.component";
import {NgxPayPalModule} from "ngx-paypal";
import {GooglePayButtonModule} from "@google-pay/button-angular";
import {RouterLink, RouterModule} from "@angular/router";
import {routes} from "./app-card.routes";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [CardComponent],
    imports: [
        CommonModule,
        NgxPayPalModule,
        GooglePayButtonModule,
        RouterLink,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
    ],
  exports:[
    CardComponent,
    RouterModule
  ],
})
export class AppCardModule {
}
