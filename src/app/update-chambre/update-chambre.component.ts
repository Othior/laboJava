import { ChambreService } from './../service/chambreService/chambre.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-chambre',
  templateUrl: './update-chambre.component.html',
  styleUrls: ['./update-chambre.component.css']
})
export class UpdateChambreComponent implements OnInit {

  constructor(
    private service: ChambreService
  ) { }

  ngOnInit(): void {
  }
  /**
   * name
   */
  public getChambre() {

    // this.service.getChambre()
  }

}
