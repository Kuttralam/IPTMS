import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsurerComponent } from './insurer/insurer.component';
import { ClaimsComponent } from './claims/claims.component';
import { PackagesComponent } from './packages/packages.component';
import { SpecialistsComponent } from './specialists/specialists.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'InsurancePackages',component:InsurerComponent},
  {path:'InitiateClaim',component:ClaimsComponent},
  {path:'TreatmentPackage',component:PackagesComponent},
  {path:'DoctorDetails',component:SpecialistsComponent},
  {path:'PatientsTreatmentPlan',component:TreatmentComponent},
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
