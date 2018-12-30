import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { OwnersComponent } from './pages/owners/owners.component';
import { CarsComponent } from './pages/cars/cars.component';
import { AdsComponent } from './pages/ads/ads.component';
import { ConfigComponent } from './pages/config/config.component';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'page-not-found', component: PageNotFoundComponent },
    { path: 'owners', component: OwnersComponent },
    { path: 'cars', component: CarsComponent },
    { path: 'ads', component: AdsComponent },
    { path: 'config', component: ConfigComponent },
    { path: '**', component: PageNotFoundComponent },
    {
      path: 'auth',
      component: NbAuthComponent,
      children: [
        { path: '', component: NbLoginComponent, },
        { path: 'login', component: NbLoginComponent, },
        { path: 'register', component: NbRegisterComponent, },
        { path: 'logout', component: NbLogoutComponent, },
        { path: 'request-password', component: NbRequestPasswordComponent, },
        { path: 'reset-password', component: NbResetPasswordComponent, },
      ],
    },
  
  ];
  
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }