import { Component, OnInit } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

Knjige:any;
Zamjena:any;
searchtext : any;

totalLength:any;
page:number = 1;

constructor(private httpKlijent: HttpClient,private  router :Router) { }

  ngOnInit(): void {
    this.UcitajKnjige();
  }

  UcitajKnjige(){
    
    this.httpKlijent.get("https://localhost:44308/Knjiga/GetAll")
    .subscribe(x=>{
      console.log("Knjige", x);
      this.Knjige = x;
      this.Zamjena=x;
    });

  }

  Search()
  {
    console.log(this.searchtext);
    if(this.searchtext==" ")
    {
      this.ngOnInit();
    }
    else {
     return this.Knjige=this.Zamjena.filter((x:any)=> x.nazivKnjige.toLowerCase().includes(this.searchtext));
    }
  }

}
