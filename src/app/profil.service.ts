import { Injectable } from '@angular/core';
import { ProfilModel } from './model/profilModel'
import { NgDate } from './model/dateModel'

@Injectable()
export class ProfilService {

  profils:Array<ProfilModel>;

  constructor() { 

    this.profils = [
    /*  { name:"Julien", birthday: new NgDate(new Date(1976,2,17)) },
      { name:"Mimi", birthday: new NgDate(new Date(2007,8,14)) },
      { name:"Lila", birthday: new NgDate(new Date(2009,3,27)) },
      { name:"Eva", birthday: new NgDate(new Date(1977,5,18)) }
*/
    ];

    let p = new ProfilModel();
    p.name = "Julien";
    p.birthday = new Date(1976,2,17);
    //p.birthday.dateInput = ;
    this.profils.push(p);

  }

  get():Array<ProfilModel>{
    return this.profils;
  }

  post(p:ProfilModel):number{
    return this.profils.push(p);
  }

}
