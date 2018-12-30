import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbThemeModule } from '@nebular/theme';
import { HttpClientModule }    from '@angular/common/http';
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
  ],
  imports: [
    BrowserModule,
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
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
