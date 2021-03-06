import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { createChambre } from '../entitiesInterface/entitiesInterface';
import { ChambreService } from '../service/chambreService/chambre.service';

@Component({
  selector: 'app-create-chambre',
  templateUrl: './create-chambre.component.html',
  styleUrls: ['./create-chambre.component.css']
})
export class CreateChambreComponent implements OnInit {

  chambre: createChambre;

  constructor(
    private service: ChambreService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  createChambre(value:NgForm){

    this.chambre = {
      adresse: value.form.value.adresse,
      ville: value.form.value.ville,
      place: value.form.value.place,
      idUser: value.form.value.idUser,
    };



    this.service.createChambre(this.chambre).subscribe( data => {
      alert('votre requête à bien été ajouté :) ');
    })
    this.router.navigate(['chambre']);
  }
}
