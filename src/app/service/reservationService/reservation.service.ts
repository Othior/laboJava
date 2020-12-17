import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation, createReservation } from 'src/app/entitiesInterface/entitiesInterface';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  url: string;

  constructor(
    private httpClient: HttpClient,
    private service: ServiceService
  )
  {
    this.url = this.service.BASE_URL + '/reservation'
  }

  getListReservation(){
    return this.httpClient.get(this.url + '/list');
  }

  getReservation(id: number){
    return this.httpClient.get(this.url + '/read/' + id);
  }

  createReservation(reservation: createReservation){
    return this.httpClient.post(this.url + '/create' , reservation ,{ responseType: 'type' as 'json' } );
  }

  updateReservation(id: number, reservation: Reservation){
    return this.httpClient.put(this.url + '/update/'+ id , reservation ,{ responseType: 'type' as 'json' });
  }

  deleteReservation(id: number){
    return this.httpClient.delete(this.url + '/delete/' + id);
  }
}
