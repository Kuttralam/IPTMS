import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-claim',
  templateUrl: './show-claim.component.html',
  styleUrls: ['./show-claim.component.css']
})
export class ShowClaimComponent implements OnInit {

  
  constructor(private service:SharedService) {
  this.ModalTitle="";
  }

  
  ClaimsList:any=[];
  ModalTitle:string;
  ActivateAddEditClaimComp:boolean=false;
  claim:any;

  ngOnInit(): void {
    this.refreshClaimList();
  }

  
  InitiateClick(){
    this.claim={
      patientName:"",
      ailmentName:"",
      packageType:"",
      insurerName:""

    }
    this.ModalTitle="Initiate Claim";
    this.ActivateAddEditClaimComp=true;
  }

  closeClick(){
    this.ActivateAddEditClaimComp=false;
    this.refreshClaimList();
  }

  refreshClaimList(){
    this.service.getclaimsList().subscribe(data=>{
      this.ClaimsList=data;
    });
  }

}
