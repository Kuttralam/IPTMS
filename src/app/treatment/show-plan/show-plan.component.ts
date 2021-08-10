import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-plan',
  templateUrl: './show-plan.component.html',
  styleUrls: ['./show-plan.component.css']
})
export class ShowPlanComponent implements OnInit {

  constructor(private service:SharedService) {
    this.ModalTitle="";
   }

  TreatmentList:any=[];
  ModalTitle:string;
  ActivateAddEditTreatComp:boolean=false;
  treatment:any;

  ngOnInit(): void {
    this.refreshTreatmentList();
  }

  InitiateClick(){
    this.treatment={
      PatientId:"",
      patientName:"",
      patientAge:"",
      ailmentName:"",
      packageType:"",
      treatmentStartDate:""
    }
    this.ModalTitle="Patient Detail";
    this.ActivateAddEditTreatComp=true;
  }

  closeClick(){
    this.ActivateAddEditTreatComp=false;
    this.refreshTreatmentList();
  }


  refreshTreatmentList(){
    this.service.getPlanDetails().subscribe(data=>{
      this.TreatmentList=data;
    });
  }
}
