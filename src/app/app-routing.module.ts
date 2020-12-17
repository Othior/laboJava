import { UpdateUtilisateurComponent } from './update-utilisateur/update-utilisateur.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ChambreComponent } from './chambre/chambre.component';
import { ActiviterComponent } from './activiter/activiter.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUtilisateurComponent } from './create-utilisateur/create-utilisateur.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { CreateChambreComponent } from './create-chambre/create-chambre.component';
import { UpdateChambreComponent } from './update-chambre/update-chambre.component';
import { CreateActiviterComponent } from './create-activiter/create-activiter.component';

const routes: Routes = [
  { path: "" , component: HomeComponent},
  { path: 'activiter', component: ActiviterComponent },
  { path: 'activiter/create', pathMatch:'full', component: CreateActiviterComponent },
  { path: 'activiter/delete/:id' , redirectTo: 'activiter', pathMatch:'full'},
  { path: 'chambre', component: ChambreComponent },
  { path: 'chambre/create', pathMatch:'full', component: CreateChambreComponent },
  { path: 'chambre/delete/:id' , redirectTo: 'chambre', pathMatch:'full'},
  { path: 'chambre/update/:id' , pathMatch:'full', component: UpdateChambreComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'reservation/create', pathMatch:'full', component: CreateReservationComponent },
  { path: 'reservation/delete/:id' , redirectTo: 'reservation', pathMatch:'full'},
  { path: 'reservation/update/:id' , pathMatch:'full', component: UpdateReservationComponent },
  { path: 'utilisateur', component: UtilisateurComponent },
  { path: 'utilisateur/create', pathMatch:'full', component: CreateUtilisateurComponent },
  { path: 'utilisateur/delete/:id' , redirectTo: 'utilisateur', pathMatch:'full'},
  { path: 'utilisateur/update/:id' , pathMatch:'full', component: UpdateUtilisateurComponent },
  { path: '**' , component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
