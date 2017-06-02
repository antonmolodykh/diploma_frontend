import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RequestsService } from './requests.service';

import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SignerComponent } from './signer/signer.component';
import { RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { SummaryComponent } from './summary/summary.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MediaThumbnailComponent } from './media-thumbnail/media-thumbnail.component';
import { InvolvementIndicatorComponent } from './summary/involvement-indicator/involvement-indicator.component';

const appRoutes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: StatisticsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SignerComponent,
    LoginComponent,
    SummaryComponent,
    StatisticsComponent,
    MediaThumbnailComponent,
    InvolvementIndicatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    RequestsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
