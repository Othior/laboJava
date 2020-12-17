import { Component, OnInit } from '@angular/core';
import { Reservation } from '../entitiesInterface/entitiesInterface';
import { ChambreService } from '../service/chambreService/chambre.service';
import { ReservationService } from '../service/reservationService/reservation.service';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent implements OnInit {

  reservation: Reservation;
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

  updateReservation(){

  }

}
