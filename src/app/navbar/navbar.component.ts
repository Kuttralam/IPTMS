import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private cookies:CookieService,private _location: Location) { }

  ngOnInit(): void {
  }
  
  insurer()
  {
    this.router.navigateByUrl("/InsurancePackages");
  }
  claim()
  {
    this.router.navigateByUrl("/InitiateClaim");
  }
  treatmentpackages()
  {
    this.router.navigateByUrl("/TreatmentPackage");
  }
  specialists()
  {
    this.router.navigateByUrl("/DoctorDetails");
  }
  treatment()
  {
    this.router.navigateByUrl("/PatientsTreatmentPlan");
  }
  backClicked()
  {
    this._location.back();
  }
  about()
  {
    this.router.navigateByUrl("/About");
  }
  logout()
  {
    window.localStorage.clear();
    window.sessionStorage.clear();
    this.cookies.deleteAll();
    setTimeout(() => {this.router.navigate(['']);},500);
  }
}
