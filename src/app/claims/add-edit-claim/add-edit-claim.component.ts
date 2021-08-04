import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-claim',
  templateUrl: './add-edit-claim.component.html',
  styleUrls: ['./add-edit-claim.component.css']
})
export class AddEditClaimComponent implements OnInit {

  constructor(private service:SharedService,private router:Router) {
    this.patientName="";
    this.ailmentName="";
    this.packageName="";
    this.insurerName="";
    
   }
   @Input() claim:any;
   patientName:string;
   ailmentName:string;
   packageName:string;
   insurerName:string;

   showMsg:boolean=false;
   showFail:boolean=false;
   showWarn: boolean = false;
   
   ClaimsList:any=[];
   InsurerList:any=[];
   PatientList:any=[];

   ngOnInit(): void {
     this.loadClaimsList();
   }
 
   loadClaimsList(){
     this.service.getclaimsList().subscribe((data:any)=>{
       this.ClaimsList=data;
       this.ailmentName=this.claim.ailmentName;
       this.packageName=this.claim.packageName;       
     });
     this.service.getinsurerList().subscribe(data=>{
      this.InsurerList=data;
      this.insurerName=this.claim.insurerName;
    });
    this.service.getPatientDetail().subscribe((data:any)=>{
      this.PatientList=data;
      this.patientName=this.claim.patientName;
    });
   }
 
   initiate(){
     var val = {
      patientName:this.patientName,
      ailmentName:this.ailmentName,
      packageName:this.packageName,
      insurerName:this.insurerName
            };
 
     //alert(this.patientName+this.ailmentName);
      if(this.patientName==""||this.ailmentName==""||this.packageName==""||this.insurerName=="")
        {
          this.showWarn=true;
          setTimeout(() => {this.showWarn=false;},2000);
          return;
        }
      
        if(this.patientName!=null&&this.ailmentName!=null&&this.packageName!=null&&this.insurerName=="")
        {
          this.showWarn=true;
          setTimeout(() => {this.showWarn=false;},2000);
          return;
        }
          
     this.service.initiateClaims(val).subscribe(res=>{
      
      

       if(res.toString()=="0")
       {
        this.showFail=true;
        setTimeout(() => {this.showFail=false;},2000);
        return;
       }

      if(res.toString()!="0")
        {
          this.showMsg=true;
          setTimeout(() => {window.location.reload();},700);
          return;
        }
        this.patientName="";
        this.ailmentName="";
        this.packageName="";
        this.insurerName="";
      this.loadClaimsList();
     },
     error => {
      this.showFail=true;
      setTimeout(() => {this.showFail=false;},2000);
    });
}

   reset()
   {
      this.patientName="";
      this.ailmentName="";
      this.packageName="";
      this.insurerName="";
  }

}
