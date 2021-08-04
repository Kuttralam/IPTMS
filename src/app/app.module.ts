import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './shared.service';
import { ShowInsComponent } from './insurer/show-ins/show-ins.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { InsurerComponent } from './insurer/insurer.component';
import { ClaimsComponent } from './claims/claims.component';
import { ShowClaimComponent } from './claims/show-claim/show-claim.component';
import { AddEditClaimComponent } from './claims/add-edit-claim/add-edit-claim.component';
import { PackagesComponent } from './packages/packages.component';
import { SpecialistsComponent } from './specialists/specialists.component';
import { ShowPacComponent } from './packages/show-pac/show-pac.component';
import { ShowSpecComponent } from './specialists/show-spec/show-spec.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { ShowPlanComponent } from './treatment/show-plan/show-plan.component';
import { AddPlanComponent } from './treatment/add-plan/add-plan.component';
import { AboutusComponent } from './aboutus/aboutus.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    InsurerComponent,
    ShowInsComponent,
    ClaimsComponent,
    ShowClaimComponent,
    AddEditClaimComponent,
    PackagesComponent,
    SpecialistsComponent,
    ShowPacComponent,
    ShowSpecComponent,
    TreatmentComponent,
    ShowPlanComponent,
    AddPlanComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [SharedService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
