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

const routes: Routes = [
  { path: "" , component: HomeComponent},
  { path: 'activiter', component: ActiviterComponent },
  { path: 'chambre', component: ChambreComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'utilisateur', component: UtilisateurComponent },
  { path: 'utilisateur/create', pathMatch:'full', component: CreateUtilisateurComponent },
  { path: 'utilisateur/delete/:id' ,  redirectTo: 'utilisateur', pathMatch:'full'},
  { path: 'utilisateur/update/:id' , pathMatch:'full', component: UpdateUtilisateurComponent },
  { path: '**' , component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
