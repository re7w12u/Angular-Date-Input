import { Component, OnInit,Input } from '@angular/core';
import { ProfilModel } from '../model/profilModel';
import { NgDate, NgDate1 } from '../model/dateModel';
import * as moment from 'moment';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  selectedProfil:ProfilModel;
  @Input() profil:ProfilModel;

  constructor() { }

  ngOnInit() {

  }

  onChange($event){
    this.profil.birthday = moment($event, moment.ISO_8601).toDate();
  }

}
