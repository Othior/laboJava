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

  constructor(
    private service: ReservationService
  ) { }

  ngOnInit(): void {
  }

  createReservation(value: NgForm){

    this.reservation = {
      nbPersonne: value.form.value.pseudo,
      dateArriver: value.form.value.pseudo,
      dateDepart: value.form.value.pseudo,
      idUser: value.form.value.pseudo,
      idChambre: value.form.value.pseudo,
    }

    // this.service.createReservation(reservation);
  }
}
