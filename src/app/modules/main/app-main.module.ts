import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "../../layouts/main/main.component";
import {AppFooterModule} from "../footer/app-footer.module";
import {RouterLink, RouterModule, Routes} from "@angular/router";
import {SwiperSectionComponent} from "../../layouts/main/swiper-section/swiper-section.component";
import {SwiperSection2Component} from "../../layouts/main/swiper-section2/swiper-section2.component";
import {NgxUsefulSwiperModule} from "ngx-useful-swiper";
import {routes} from "./app-main.routes";




@NgModule({
  declarations: [MainComponent, SwiperSectionComponent, SwiperSection2Component],
  imports: [
    CommonModule,
    AppFooterModule,
    RouterLink,
    NgxUsefulSwiperModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    MainComponent,
    RouterModule
  ]
})
export class AppMainModule { }
