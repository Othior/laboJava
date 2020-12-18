import { CustomDatePipe } from './custum.pipe/custom.pipeDate';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChambreComponent } from './chambre/chambre.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ActiviterComponent } from './activiter/activiter.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CreateChambreComponent } from './create-chambre/create-chambre.component';
import { UpdateChambreComponent } from './update-chambre/update-chambre.component';
import { CreateUtilisateurComponent } from './create-utilisateur/create-utilisateur.component';
import { UpdateUtilisateurComponent } from './update-utilisateur/update-utilisateur.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { CreateActiviterComponent } from './create-activiter/create-activiter.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    ChambreComponent,
    ReservationComponent,
    ActiviterComponent,
    UtilisateurComponent,
    NotFoundComponent,
    NavbarComponent,
    HomeComponent,
    CreateChambreComponent,
    UpdateChambreComponent,
    CreateUtilisateurComponent,
    UpdateUtilisateurComponent,
    CreateReservationComponent,
    CreateActiviterComponent,
    UpdateReservationComponent,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
