import { ChambreService } from './../service/chambreService/chambre.service';
import { Component, OnInit } from '@angular/core';
import { Chambre } from '../entitiesInterface/entitiesInterface';

@Component({
  selector: 'app-update-chambre',
  templateUrl: './update-chambre.component.html',
  styleUrls: ['./update-chambre.component.css']
})
export class UpdateChambreComponent implements OnInit {

  chambre: Chambre;

  constructor(
    private service: ChambreService
  ) { }

  ngOnInit(): void {
  }

  updateChambre(){

  }

}
