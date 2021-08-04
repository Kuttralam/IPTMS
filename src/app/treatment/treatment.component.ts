import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent implements OnInit {

  constructor(private router:Router,private cookies:CookieService) { }

  ngOnInit(): void {
    /*
    let token = sessionStorage.getItem('session');
        if(token == null || token == undefined)
            this.router.navigate(['']);
    */
    let jwt = localStorage.getItem('jwt');
        if(jwt == null || jwt == undefined)
          this.router.navigate(['']);
  }

}
