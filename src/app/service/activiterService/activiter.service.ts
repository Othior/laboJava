import { ServiceService } from './../service.service';
import { Activiter, createActiviter } from './../../entitiesInterface/entitiesInterface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiviterService {

  listActiviter: any;
  url: string;

  constructor(
    private httpClient: HttpClient,
    private service: ServiceService
    )
    {
      this.url = this.service.BASE_URL + '/activiter';
    }


  public getListActiviter(){
    return this.httpClient.get(this.url + '/list');
  }

  public createActiviter(activiter: createActiviter){
    return this.httpClient.post(this.url + '/create', activiter ,{responseType: 'text' as 'json'});
  }

  public deleteActiviter(id: number){
    return this.httpClient.delete(this.url + '/delete/'+ id);
  }
}
