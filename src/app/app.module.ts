import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RequestsService } from './requests.service';

import { MdButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SignerComponent } from './signer/signer.component';

@NgModule({
  declarations: [
    AppComponent,
    SignerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule
  ],
  providers: [
    RequestsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
