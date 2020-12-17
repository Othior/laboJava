import { createUtilisateur } from './../entitiesInterface/entitiesInterface';
import { UtilisateurService } from './../service/utilisateurService/utilisateur.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-utilisateur',
  templateUrl: './create-utilisateur.component.html',
  styleUrls: ['./create-utilisateur.component.css']
})
export class CreateUtilisateurComponent implements OnInit {

  utilisateur: createUtilisateur;

  constructor(
    private service: UtilisateurService
  ) { }

  ngOnInit(): void {
  }

  createUtilisateur(value: NgForm){

    this.utilisateur = {
      pseudo: value.form.value.pseudo,
      password: value.form.value.password,
      lastname: value.form.value.lastname,
      firstname: value.form.value.firstname,
      email: value.form.value.email
    }

     this.service.createUtilisateur(this.utilisateur);

  }

}
