import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createUtilisateur ,Utilisateur } from 'src/app/entitiesInterface/entitiesInterface';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  url: string;

  constructor(
    private httpClient: HttpClient,
    private service: ServiceService
  )
  {
    this.url = this.service.BASE_URL + '/utilisateur'
  }

  getListUtilisateur(){
    return this.httpClient.get(this.url + '/list')
  }

  getUtilisateur(id: number){
    return this.httpClient.get(this.url + '/read/'+id)
  }

  createUtilisateur(utilisateur: createUtilisateur){
    return this.httpClient.post(this.url + '/create' , utilisateur ,{ responseType: 'type' as 'json' } );
  }

  updateUtilisateur(id: number, utilisateur: Utilisateur){
    return this.httpClient.put(this.url + '/update/'+ id, utilisateur ,{ responseType: 'type' as 'json' })
  }

  deleteUtilisateur(id: number){
    return this.httpClient.delete(this.url + '/delete/' + id ,{ responseType: 'type' as 'json' });
  }
}
