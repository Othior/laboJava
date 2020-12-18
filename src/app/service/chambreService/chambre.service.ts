import { createChambre } from './../../entitiesInterface/entitiesInterface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chambre } from 'src/app/entitiesInterface/entitiesInterface';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  url: string;

  constructor(
    private httpClient: HttpClient,
    private service: ServiceService
  )
  {
    this.url = this.service.BASE_URL + '/chambre'
  }

  getListChambre(){
    return this.httpClient.get(this.url + '/list')
  }

  getChambre(id: number){
    return this.httpClient.get(this.url + '/read/' + id)
  }

  createChambre(chambre: createChambre){
    return this.httpClient.post(this.url + '/create' ,chambre,{ responseType: 'type' as 'json' } );
  }

  updateChambre(id: number, chambre: Chambre){
    return this.httpClient.put(this.url + '/update/' + id, chambre ,{ responseType: 'type' as 'json' })
  }

  deleteChambre(id: number){
    return this.httpClient.delete(this.url + '/delete')
  }

}
