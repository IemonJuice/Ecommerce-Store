import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {environment} from './environment'
import {AngularFireModule} from "@angular/fire";
import {ReactiveFormsModule} from "@angular/forms";

import {AppHeaderModule} from "./modules/header/app-header.module";


@NgModule({
  bootstrap: [AppComponent],

  declarations: [
    AppComponent,
  ],
  exports: [],
  imports: [


    BrowserModule,

    AppRoutingModule,


    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment),
    AppHeaderModule,
  ],
  providers: []
})

export class AppModule {
}


