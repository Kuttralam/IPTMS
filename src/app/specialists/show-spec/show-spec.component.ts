import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-spec',
  templateUrl: './show-spec.component.html',
  styleUrls: ['./show-spec.component.css']
})
export class ShowSpecComponent implements OnInit {

  constructor(private service:SharedService) { this.filterTerm="";}

  SpecialistList:any=[];
  filterTerm: string;
  
  ngOnInit(): void {
    this.refreshSpecialistList();
  }

  refreshSpecialistList(){
    this.service.getSpecialistsList().subscribe(data=>{
      this.SpecialistList=data;
    });
  }

}
