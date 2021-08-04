import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-ins',
  templateUrl: './show-ins.component.html',
  styleUrls: ['./show-ins.component.css']
})
export class ShowInsComponent implements OnInit {

  constructor(private service:SharedService) {
    this.filterTerm="";
  }

  InsurerList:any=[];
  index:number=1;
  filterTerm: string;
  
  ngOnInit(): void {
    this.refreshDepList();
  }

  refreshDepList(){
    this.service.getinsurerList().subscribe(data=>{
      this.InsurerList=data;
    });
  }

}