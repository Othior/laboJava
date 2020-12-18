import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { createUtilisateur, Utilisateur } from '../entitiesInterface/entitiesInterface';
import { UtilisateurService } from '../service/utilisateurService/utilisateur.service';

@Component({
  selector: 'app-update-utilisateur',
  templateUrl: './update-utilisateur.component.html',
  styleUrls: ['./update-utilisateur.component.css']
})
export class UpdateUtilisateurComponent implements OnInit {

  utilisateur: any;
  changeValueUtilisateur: Utilisateur;
  private id: number = JSON.parse(localStorage.getItem("idUserChangeValue"));

  constructor(
    private service: UtilisateurService,
    private router: Router
  ) { }

  ngOnInit(): void {

    console.log("localstorage => ", JSON.parse(localStorage.getItem("idUserChangeValue")));

    this.getUtilisateur(JSON.parse(localStorage.getItem("idUserChangeValue")));

  }

  updateUtilisateur(value: NgForm){

    this.changeValueUtilisateur = {
      id: this.id,
      pseudo: value.form.value.pseudo,
      password: value.form.value.password,
      lastname: value.form.value.lastname,
      firstname: value.form.value.firstname,
      email: value.form.value.email
    }

    this.service.updateUtilisateur(this.changeValueUtilisateur.id , this.changeValueUtilisateur).subscribe(data => {
      console.log('data update-utilisateur component => ', data);
    });

    this.router.navigate(['utilisateur']);

    // localStorage.removeItem("idUserChangeValue");
  }

  getUtilisateur(id: number){
    this.service.getUtilisateur(id).subscribe(data => {
      this.utilisateur = data;
      console.log('update - utilisateur  variable utilisateur => ', this.utilisateur)
    });
  }
}
