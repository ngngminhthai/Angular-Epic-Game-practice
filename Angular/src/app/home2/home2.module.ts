import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Home2Component } from './home2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from '../core/interceptors/loading.interceptor';
import { ErrorInterceptor } from '../core/interceptors/error.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Home2Component],
  imports: [
    CommonModule,
    SharedModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    RouterModule
  ],
  exports: [Home2Component]
})
export class HomeModule2 { }
