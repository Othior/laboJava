import { ChambreService } from './../service/chambreService/chambre.service';
import { Component, OnInit } from '@angular/core';
import { Chambre } from '../entitiesInterface/entitiesInterface';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css']
})
export class ChambreComponent implements OnInit {

  listChambre: any;

  constructor(
    private service: ChambreService
  ) { }

  ngOnInit(): void {
    this.service.getListChambre().toPromise()
    .then(data => {
      this.listChambre = data;
    })
    .catch(err => {

      console.log('error Chambre Component => ', err);
    })
  }
  deleteChambre(id:number){
    this.service.deleteChambre(id).toPromise()
    .then( data => {
      console.log('data delete Reservation Component => ',data)
    })
    .catch(err => {
      console.log('err delete Reservation Component => ',err)
    });

    window.location.reload();
  }

  updateChambre(id:number){
    localStorage.setItem('idChambreChangeValue', JSON.stringify(id));
  }

}
