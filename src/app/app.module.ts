import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestSectionComponent } from './request-section/request-section.component';
import { Configservice } from './config/configservice.service';
import { ResponseSectionComponent } from './response-section/response-section.component';
import { RequestSectionHeaderComponent } from './request-section-header/request-section-header.component';

@NgModule({
  declarations: [AppComponent, RequestSectionComponent, ResponseSectionComponent, RequestSectionHeaderComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [Configservice],
  bootstrap: [AppComponent],
})
export class AppModule {}
