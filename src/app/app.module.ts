import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RequestsService } from './requests.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdProgressSpinnerModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SignerComponent } from './signer/signer.component';
import { RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { SummaryComponent } from './summary/summary.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MediaThumbnailComponent } from './media-thumbnail/media-thumbnail.component';
import { InvolvementIndicatorComponent } from './summary/involvement-indicator/involvement-indicator.component';
import { GraphsComponent } from './statistics/graphs/graphs.component';
import { GraphComponent } from './statistics/graphs/graph/graph.component';

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
    InvolvementIndicatorComponent,
    GraphsComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    MdProgressSpinnerModule,
    MdSelectModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    RequestsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
