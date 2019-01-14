import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { NbThemeModule } from '@nebular/theme';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { OwnersComponent } from './pages/owners/owners.component';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';
import { SliderModule } from 'angular-image-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NbSidebarModule, NbLayoutModule, NbSidebarService, NbCardModule, NbListModule, 
         NbButtonModule, NbUserModule, NbSearchModule, NbInputModule, NbActionsModule,
         NbSelectModule, NbPopoverModule, NbDialogModule,} from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { AdsComponent } from './pages/ads/ads.component';
import { PartsComponent } from './pages/parts/parts.component';
import { CarsComponent } from './pages/cars/cars.component';
import { ConfigComponent } from './pages/config/config.component';
import { FormsModule } from '@angular/forms';

import { AlertComponent } from './auth/_directives/alert.component';
import { AuthGuard } from './auth/_guards/auth.huard';
import { ErrorInterceptor } from './auth/_helpers/error.interceptor';
import { JwtInterceptor } from './auth/_helpers/jwt.interceptor';
import { AlertService } from './auth/_services/alert.service';
import { AuthenticationService } from './auth/_services/authentication.service';
import { UserService } from './auth/_services/user.service';
import { Ok_loginCOmponent } from './auth/ok_login/ok_login.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    OwnersComponent,
    AdsComponent,
    PartsComponent,
    CarsComponent,
    ConfigComponent,
    AlertComponent,
    Ok_loginCOmponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot(),
    NbDialogModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    SliderModule,
    NbLayoutModule,
    NbSidebarModule,
    NbCardModule,
    NbListModule,
    NbSelectModule,
    NbButtonModule,
    NbPopoverModule,
    NbActionsModule,
    NbInputModule,
    NbUserModule,
    NbSearchModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
        }),
      ],
      forms: {},
    }), 
  ],
  providers: [
    NbSidebarService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
