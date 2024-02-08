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
import { NzButtonModule } from 'ng-zorro-antd/button';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    RequestSectionComponent,
    ResponseSectionComponent,
    RequestSectionHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NzButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [Configservice, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
