import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:SharedService,private router:Router,private cookies:CookieService) {
    this.UserName="";
    this.Password="";
   }

  ngOnInit(): void {

      window.localStorage.clear();
      window.sessionStorage.clear();
      this.cookies.deleteAll();
      this.router.navigateByUrl('');

    let token = sessionStorage.getItem('session');
        if(token == null || token == undefined)
            this.router.navigate(['']);

    let jwt = localStorage.getItem('jwt');
        if(jwt == null || jwt == undefined)
            this.router.navigate(['']);
  }

  UserName:string;
  Password:string;

  showMsg: boolean = false;
  showFail: boolean = false;
  showWarn: boolean = false;

  ActivateAddEditClaimComp:boolean=false;

  initiate(value:any){
    var val = {
                UserName:value.UserName,
                Password:value.Password
              };
    
    if(this.UserName==""||this.Password=="")
      {
        this.showWarn=true;
        setTimeout(() => {this.showWarn=false;},2000);
        return;
      }

    console.log(val);

    this.service.LoginClaims(val).subscribe((res:any)=>{
          const token = res.token;
          console.log(res);
          localStorage.setItem("jwt",token);
          sessionStorage.setItem("session",token);
          this.showMsg=true;
          setTimeout(() => {this.router.navigate(['/Home']);},1000);
          //this.router.navigateByUrl("/Home");
        },
        error => {
          this.showFail=true;
          setTimeout(() => {this.showFail=false;},2000);
        });
    }
}
