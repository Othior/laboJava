import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { createActiviter } from '../entitiesInterface/entitiesInterface';
import { ActiviterService } from '../service/activiterService/activiter.service';

@Component({
  selector: 'app-create-activiter',
  templateUrl: './create-activiter.component.html',
  styleUrls: ['./create-activiter.component.css']
})
export class CreateActiviterComponent implements OnInit {

  activiter: createActiviter;

  constructor(
    private service: ActiviterService
  ) { }

  ngOnInit(): void {
  }

  createActiviter(value: NgForm){

    this.activiter = {
      nom: value.form.value.nom,
      description: value.form.value.description
    }

    console.log('value create-activiter component => ' , this.activiter)

    // this.service.createActiviter(this.activiter).subscribe(data => {
    //   console.log('data create-activiter component => ' , data)
    // });
  }
}
