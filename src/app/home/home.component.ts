import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private cookies:CookieService) {}
  
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
