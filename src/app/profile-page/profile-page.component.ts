import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  idKorisnik: any = Number(this.route.snapshot.paramMap.get('id'));
  Korisnik: any;
  constructor(private route: ActivatedRoute, private httpKlijent: HttpClient) { }

  ngOnInit(): void {
    this.UcitajKorisnika();
  }

  UcitajKorisnika() {

    console.log(this.idKorisnik);
    this.httpKlijent.get("https://xsoftbackend20220611111027.azurewebsites.net/Korisnik/Get/" + this.idKorisnik)
      .subscribe(x => {
        this.Korisnik = x;
        console.log(this.Korisnik);
      });

  }
}
