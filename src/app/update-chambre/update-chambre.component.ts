import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ChambreService } from './../service/chambreService/chambre.service';
import { Component, OnInit } from '@angular/core';
import { Chambre } from '../entitiesInterface/entitiesInterface';

@Component({
  selector: 'app-update-chambre',
  templateUrl: './update-chambre.component.html',
  styleUrls: ['./update-chambre.component.css']
})
export class UpdateChambreComponent implements OnInit {

  chambreChangeValue: Chambre;
  chambre: any;
  private id: number = JSON.parse(localStorage.getItem('idChambreChangeValue'));

  constructor(
    private service: ChambreService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.getChambre(JSON.parse(localStorage.getItem('idChambreChangeValue')))
  }

  updateChambre(value:NgForm){

    this.chambreChangeValue = {
      id: this.id,
      adresse: value.form.value.adresse,
      ville: value.form.value.ville,
      place: value.form.value.place,
      idUser: value.form.value.idUser,
    }

    this.service.updateChambre(this.chambreChangeValue.id,this.chambreChangeValue).subscribe( data => {
      alert('votre modification à bien été faite :) ');
    });
    this.router.navigate(['chmabre']);

  }
  getChambre(id: number){
    this.service.getChambre(id).subscribe(data => {
      this.chambre = data;
    });
  }


}
