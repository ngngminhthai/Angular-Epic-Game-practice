import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { HomeModule2 } from "./home2/home2.module";
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchGamesComponent } from './search-games/search-games.component';
import { SharedModule } from "./shared/shared.module";
import { FormService } from './core/services/form.service';
import { MultiSelectDropdownComponent } from './multi-select-dropdown/multi-select-dropdown.component';
import { CommonModule } from '@angular/common';
import { GameDetailsComponent } from './shop/game-details/game-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [	
        AppComponent,
        LoginComponent,
        SignUpComponent,
        SearchGamesComponent,
        GameDetailsComponent,
      MultiSelectDropdownComponent
   ],
    providers: [
        FormService,
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CoreModule,
        NgxSpinnerModule,
        HomeModule2,
        ReactiveFormsModule,
        SharedModule,
        FormsModule,
        CommonModule,
        RouterModule
    ]
})
export class AppModule { }
