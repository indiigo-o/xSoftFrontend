import { Component, OnInit } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import { AutentifikacijaHelper } from '../_helpers/autentifikacija-helper';


@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  Knjige:any;

  constructor(private httpKlijent: HttpClient,) { }

  ngOnInit(): void {
    this.UcitajKnjige();
  }

  UcitajKnjige(){
    this.httpKlijent.get("https://localhost:44308/Knjiga/GetAll")
    .subscribe(x=>{
      console.log("Knjige", x);
      this.Knjige = x;
    });
  }

  Delete(id:any){
    if(AutentifikacijaHelper.getLoginInfo().autentifikacijaToken.vrijednost!=null){
    this.httpKlijent.delete("https://localhost:44308/Knjiga/Delete/" + id)
    .subscribe(x=>{
        alert("Knjiga uspjesno izbrisana");
        this.UcitajKnjige();
    });
  }}
  
}
