import { Component, OnInit } from '@angular/core';
import { AutentifikacijaHelper } from '../_helpers/autentifikacija-helper';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  idKnjige:any= Number(this.route.snapshot.paramMap.get('id'));
  Knjiga:any;
  isLog:boolean=AutentifikacijaHelper.getLoginInfo().isLogiran;

  constructor(private route: ActivatedRoute,private httpKlijent: HttpClient, private  router :Router) { }

  ngOnInit(): void {
    this.UcitajKnjigu();
  }

  UcitajKnjigu(){
    this.httpKlijent.get("https://localhost:44308/Knjiga/Get/"+ this.idKnjige)
    .subscribe(x=>{
      console.log("Knjiga", x);
      this.Knjiga = x;

    });
  }
}
