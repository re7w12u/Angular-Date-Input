import { Component, OnInit } from '@angular/core';
import { ProfilModel } from './model/profilModel';
import { ProfilService } from './profil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  profils:Array<ProfilModel>;

  constructor(private profilService:ProfilService){}

  ngOnInit(){
    this.profils = this.profilService.get();
  }

}
