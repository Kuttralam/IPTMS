import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly insurer="https://localhost:44370/api/InsuranceClaim";
  //readonly insurer="https://ipinsuranceclaimmicroserviceiptms.azurewebsites.net/api/InsuranceClaim";

  readonly offerings="https://localhost:44362/api/Treatmentofferings";
  //readonly offerings="https://iptreatmentofferingiptms.azurewebsites.net/api/Treatmentoffering";
  
  readonly treatment="https://localhost:44385/api/Treatment";
  //readonly treatment="https://iptreatmentmicroserviceiptms.azurewebsites.net/api/Treatment";
  
  readonly login="https://localhost:44344/api/Authorization";
  //readonly login="https://authorizationmicroservicesiptms.azurewebsites.net/api/Authorization";

  constructor(private https:HttpClient) { }

  getinsurerList():Observable<any[]>{
    return this.https.get<any>(this.insurer+'/getInsurerDetail');
  }

  getinsurerselectedList(val:any){
    return this.https.get<any>(this.insurer+'/getInsurerByPackage',val);
  }

  initiateClaims(val:any){
    return this.https.post(this.insurer+'/initiateClaim',val);
  }
  
  getclaimsList():Observable<any[]>{
    return this.https.get<any>(this.insurer+'/getClaimsDetail');
  }

  getpackagesList():Observable<any[]>{
    return this.https.get<any>(this.offerings+'/getPackages');
  }

  getPackagesByNameList(val:any){
    return this.https.get<any>(this.offerings+'/getPackagesByName',val);
  }

  getSpecialistsList():Observable<any[]>{
    return this.https.get<any>(this.offerings+'/getSpecialists');
  }
  
  getPlanDetails():Observable<any[]>{
    return this.https.get<any>(this.treatment+'/getPlanDetails');
  }
  
  getTreatmentPlanList(val:any){
    return this.https.post(this.treatment+'/getPlans',val);
  }
  getPatientDetail():Observable<any[]>{
    return this.https.get<any>(this.treatment+'/getPatientDetail');
  }
  
  LoginClaims(val:any){
    return this.https.post(this.login+'/getToken',val, {
          headers: new HttpHeaders({
            "Content-Type": "application/json"
          })
        });
  }
}
