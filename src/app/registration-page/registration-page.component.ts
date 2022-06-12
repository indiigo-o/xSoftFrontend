import { Component, OnInit } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  txtUsername:any;
  txtPassword:any;
  txtIme:any;
  txtPrezime:any;
  txtemail:any;
  txtDatum:any;
  txtAdresa:any;
  txtGrad:any;
  txtSpol:any;

  Spolovi:any;
  Gradovi:any;

  constructor(private httpKlijent: HttpClient,private  router :Router) { }

  ngOnInit(): void {
    this.UcitajGradove();
    this.UcitajSpolove();
  }


  UcitajGradove() {
    this.httpKlijent.get("https://xsoftbackend20220611111027.azurewebsites.net/Grad/GetAll")
    .subscribe((x:any)=>{
    this.Gradovi=x;

  })}

  UcitajSpolove() {
    this.httpKlijent.get("https://xsoftbackend20220611111027.azurewebsites.net/Spol/GetAll").subscribe((x: any) => {
      this.Spolovi = x;
    })
  }

  Registration(){

    let saljemo={
      ime: this.txtIme,
      prezime: this.txtPrezime,
      email: this.txtemail,
      dtumRodjenja: this.txtDatum,
      adresa: this.txtAdresa,
      korisnickoime: this.txtUsername,
      lozinka: this.txtPassword,
      grad_id: this.txtGrad,
      spol_id: this.txtSpol
    };

    this.httpKlijent.post("https://xsoftbackend20220611111027.azurewebsites.net/Korisnik/Add", saljemo)
    .subscribe((x:any)=>{
      if(x !=null)
      {
        alert("Registration successfull!");
        this.router.navigateByUrl("/login");
      }
      else{
        alert("Registration failed or username already exists!" );
      }
    });
    
  }
}
