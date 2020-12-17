import { Reservation } from './../entitiesInterface/entitiesInterface';
import { ReservationService } from './../service/reservationService/reservation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  listReservation: any;

  constructor(
    private service : ReservationService
  ) { }

  ngOnInit(): void {
    this.service.getListReservation().toPromise()
    .then(data => {
      this.listReservation = data;
    })
    .catch(err => {
      console.log('err Reservation Component =>  ', err);
    });
  }
  deleteReservation(id:number){
    this.service.deleteReservation(id).toPromise()
    .then( data => {
      console.log('data delete Reservation Component => ',data)
    })
    .catch(err => {
      console.log('err delete Reservation Component => ',err)
    })
  }

  updateReservation(id:number){
    localStorage.setItem('idReservationChangeValue', JSON.stringify(id));
  }

}
