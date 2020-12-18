import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../entitiesInterface/entitiesInterface';
import { UtilisateurService } from '../service/utilisateurService/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  listUtilisateur: any;

  constructor(
    private service : UtilisateurService
  ) { }

  ngOnInit(): void {
    this.service.getListUtilisateur().toPromise()
    .then(data => {
      this.listUtilisateur = data;
    })
    .catch(err => {
      console.log('err Reservation Component =>  ', err);
    });
  }
  deleteUtilisateur(id: number){
    this.service.deleteUtilisateur(id).subscribe(data => {
      console.log('data delete Utilisateur Components => ', data)
    })
    window.location.reload();
  }
  updateUtilisateur(id: number){
    localStorage.setItem('idUserChangeValue', JSON.stringify(id));
  }

}
