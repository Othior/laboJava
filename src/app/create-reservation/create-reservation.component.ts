import { Chambre } from 'src/app/entitiesInterface/entitiesInterface';
import { ChambreService } from './../service/chambreService/chambre.service';
import { NgForm } from '@angular/forms';
import { createReservation } from './../entitiesInterface/entitiesInterface';
import { ReservationService } from './../service/reservationService/reservation.service';
import { Component, OnInit } from '@angular/core';

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
    private serviceChambre: ChambreService
  ) { }

  ngOnInit(): void {
    this.serviceChambre.getListChambre().subscribe(data => {
      this.ListChambre = data;
    });
  }

  createReservation(value: NgForm){

    this.reservation = {
      nbPersonne: value.form.value.nbPersonne,
      dateArriver: value.form.value.dateArriver,
      dateDepart: value.form.value.dateDepart,
      idUser: value.form.value.idUser,
      idChambre: value.form.value.idChambre,
    }

    // this.service.createReservation(reservation);
  }
}
