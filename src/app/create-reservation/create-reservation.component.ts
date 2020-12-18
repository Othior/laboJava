import { Chambre } from 'src/app/entitiesInterface/entitiesInterface';
import { ChambreService } from './../service/chambreService/chambre.service';
import { NgForm } from '@angular/forms';
import { createReservation } from './../entitiesInterface/entitiesInterface';
import { ReservationService } from './../service/reservationService/reservation.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})
export class CreateReservationComponent implements OnInit {

  reservation: createReservation;
  ListChambre: any;

  constructor(
    private service: ReservationService,
    private serviceChambre: ChambreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.serviceChambre.getListChambre().subscribe(data => {
      this.ListChambre = data;
    });
  }

  createReservation(value: NgForm){

    this.reservation = {
      personne: value.form.value.personne,
      datearriver: value.form.value.dateArriver,
      datedepart: value.form.value.dateDepart,
      iduser: value.form.value.idUser,
      idchambre: value.form.value.idChambre,
    }

    this.service.createReservation(this.reservation).subscribe( data => {
      alert(' votre reservation à bien été faite ;) ');
    });

    this.router.navigate(['reservation']);

  }
}
