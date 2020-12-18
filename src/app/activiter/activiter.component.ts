import { ActiviterService } from '../service/activiterService/activiter.service';
import { Component, OnInit } from '@angular/core';
import { Activiter } from '../entitiesInterface/entitiesInterface';

@Component({
  selector: 'app-activiter',
  templateUrl: './activiter.component.html',
  styleUrls: ['./activiter.component.css']
})

export class ActiviterComponent implements OnInit {

  constructor(
    private service: ActiviterService
    ) { }

    listActiviter: any;

  ngOnInit(): void {
    this.service.getListActiviter().toPromise()
    .then(data => {

      this.listActiviter = data;
    }).catch(err => {
      console.log('err activiter component => ', err);
    })
  }
  deleteActiviter(id:number){
    this.service.deleteActiviter(id).toPromise()
    .then( data => {
      console.log('data delete Reservation Component => ',data)
    })
    .catch(err => {
      console.log('err delete Reservation Component => ',err)
    });

    window.location.reload();
  }

}
