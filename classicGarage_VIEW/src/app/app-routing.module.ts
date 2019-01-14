import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { OwnersComponent } from './pages/owners/owners.component';
import { CarsComponent } from './pages/cars/cars.component';
import { AdsComponent } from './pages/ads/ads.component';
import { ConfigComponent } from './pages/config/config.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './auth/_guards/auth.huard';
import { Ok_loginCOmponent } from './auth/ok_login/ok_login.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'page-not-found', component: PageNotFoundComponent },
    { path: 'owners', component: OwnersComponent, canActivate: [AuthGuard] },
    { path: 'cars', component: CarsComponent, canActivate: [AuthGuard] },
    { path: 'ads', component: AdsComponent, canActivate: [AuthGuard] },
    { path: 'config', component: ConfigComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: Ok_loginCOmponent, canActivate: [AuthGuard] },
    { path: '**', component: PageNotFoundComponent },

  ];
  
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }