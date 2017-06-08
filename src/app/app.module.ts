import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProfilComponent } from './profil/profil.component';

import { ProfilService } from './profil.service';
import { FormatDatePipe } from './format-date.pipe';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { HumanDatePipe } from './human-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    ProfilComponent,
    FormatDatePipe,
    DatepickerComponent,
    HumanDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProfilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
