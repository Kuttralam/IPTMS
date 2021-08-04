import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-pac',
  templateUrl: './show-pac.component.html',
  styleUrls: ['./show-pac.component.css']
})
export class ShowPacComponent implements OnInit {

  constructor(private service:SharedService) { 
    this.filterTerm="";
  }

  PackagesList:any=[];
  filterTerm: string;
  
  ngOnInit(): void {
    this.refreshPackagesList();
  }

  refreshPackagesList(){
    this.service.getpackagesList().subscribe(data=>{
      this.PackagesList=data;
    });
  }

}
