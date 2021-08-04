import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private router:Router) { }

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
