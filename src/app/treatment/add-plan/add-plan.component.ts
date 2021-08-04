import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.css']
})
export class AddPlanComponent implements OnInit {

  constructor(private service:SharedService) {
    this.Name="";
    this.Age="";
    this.Ailment="";
    this.PackageName="";
    this.CommencementDate="";
  }
  @Input() treatment:any;
  Name:string;
  Age:string;
  Ailment:string;
  PackageName:string;
  CommencementDate:string;

  showMsg:boolean=false;
  showFail:boolean=false;
  showWarn: boolean = false;

  PatientDetailList:any=[];
 
  ngOnInit(): void {
  }

  initiate(){
    var val = {
      Name:this.Name,
      Age:this.Age,
      Ailment:this.Ailment,
      PackageName:this.PackageName,
      CommencementDate:this.CommencementDate
           };
        if(this.Name==""||this.Age==""||this.Ailment==""||this.PackageName==""||this.CommencementDate=="")
        {
          this.showWarn=true;
          return;
        }
        this.Name="";
        this.Age="";
        this.Ailment="";
        this.PackageName="";
        this.CommencementDate="";

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
     this.Name="";
     this.Age="";
     this.Ailment="";
     this.PackageName="";
     this.CommencementDate="";
     this.showWarn=false;
  };
}
