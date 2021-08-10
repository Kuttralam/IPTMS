import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.css']
})
export class AddPlanComponent implements OnInit {

  constructor(private service:SharedService) {
    this.patientName="";
    this.patientAge="";
    this.ailmentName="";
    this.packageType="";
    this.treatmentStartDate="";
  }
  @Input() treatment:any;
  patientName:string;
  patientAge:string;
  ailmentName:string;
  packageType:string;
  treatmentStartDate:string;

  showMsg:boolean=false;
  showFail:boolean=false;
  showWarn: boolean = false;

  PatientDetailList:any=[];
 
  ngOnInit(): void {
  }

  initiate(){
    var val = {
      patientName:this.patientName,
      patientAge:this.patientAge,
      ailmentName:this.ailmentName,
      packageType:this.packageType,
      treatmentStartDate:this.treatmentStartDate
           };
        if(this.patientName==""||this.patientAge==""||this.ailmentName==""||this.packageType==""||this.treatmentStartDate=="")
        {
          this.showWarn=true;
      setTimeout(() => {this.showWarn=false;},2000);
          return;
        }
        this.patientName="";
        this.patientAge="";
        this.ailmentName="";
        this.packageType="";
        this.treatmentStartDate="";

    this.service.getTreatmentPlanList(val).subscribe(res=>{
      this.showMsg=true;
      setTimeout(() => {window.location.reload();},700);
    },
    error => {
      this.showFail=true;
      setTimeout(() => {this.showFail=false;},2000);
    });
  }
  reset(){
     this.patientName="";
     this.patientAge="";
     this.ailmentName="";
     this.packageType="";
     this.treatmentStartDate="";
     this.showWarn=false;
  };
}
