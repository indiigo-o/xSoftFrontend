import { Component, OnInit } from '@angular/core';
import { AutentifikacijaHelper } from '../_helpers/autentifikacija-helper';
import { LoginInformacije } from '../_helpers/login-informacije';
import {HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  txtUsername:any;
  txtPassword:any;

  constructor(private httpKlijent: HttpClient,private  router :Router) { }

  ngOnInit(): void {
  }

  btnLogin()
  {
    let saljemo={
      korisnickoIme:this.txtUsername,
      lozinka:this.txtPassword
    };

    this.httpKlijent.post<LoginInformacije>("https://localhost:44308/Autentifikacija/Login", saljemo)
    .subscribe((x:LoginInformacije)=>{
      if(x !=null )
      {
        console.log("x", x);
        AutentifikacijaHelper.setLoginInfo(x);
        alert("Welcome!");
        this.router.navigate([''])
        .then(() => {
          window.location.reload();
         });
      }
      else{
        AutentifikacijaHelper.setLoginInfo(null as any)
        alert("Login failed, please try again!" );
      }
    });
  }

}
