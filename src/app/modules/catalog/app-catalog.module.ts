import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppCatalogComponent} from "../../layouts/catalog/app-catalog.component";
import {AppFooterModule} from "../footer/app-footer.module";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import {RouterLink, RouterModule} from "@angular/router";
import {routes} from "./app-catalog-routes";
import {AngularFireModule} from "@angular/fire";


@NgModule({
  declarations: [AppCatalogComponent],

  imports: [
    AngularFireModule,
    CommonModule,
    AppFooterModule,
    NgxSkeletonLoaderModule,
    RouterLink,
    NgxSkeletonLoaderModule.forRoot({
      theme: {
        extendsFromRoot: true,
        backgroundColor: '#ccbcaf',
        height: '100%',
        width: '100%',
        left: '0',
        position: 'absolute',
      },
    }),
    RouterModule.forChild(routes)
  ],

  exports: [
    AppCatalogComponent,
    RouterModule,
  ],

})

export class AppCatalogModule {
}
