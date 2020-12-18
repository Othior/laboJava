import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Reservation } from '../entitiesInterface/entitiesInterface';
import { ChambreService } from '../service/chambreService/chambre.service';
import { ReservationService } from '../service/reservationService/reservation.service';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent implements OnInit {

  reservationChangeValue: Reservation;
  reservation: any;
  listChambre: any;
  chambre: any;
  private id: number = JSON.parse(localStorage.getItem('idReservationChangeValue'));

  constructor(
    private service: ReservationService,
    private serviceChambre: ChambreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getReservation(JSON.parse(localStorage.getItem('idReservationChangeValue')))
    this.serviceChambre.getListChambre().subscribe(data => {
      this.listChambre = data;
    })
  }

  updateReservation(value:NgForm){

    this.reservationChangeValue = {
      id: this.id,
      personne: value.form.value.nbPersonne,
      datearriver: value.form.value.dateArriver,
      datedepart: value.form.value.dateDepart,
      iduser: value.form.value.idUser,
      idchambre: value.form.value.idChambre
    }

    this.service.updateReservation(this.reservationChangeValue.id, this.reservationChangeValue).subscribe(data =>{
        alert('votre modification à bien été faite ;) ');
    });

    this.router.navigate(['reservation']);

  }
  getReservation(id: number){
    this.service.getReservation(id).subscribe(data => {
      this.reservation = data;
    });
  }

}
