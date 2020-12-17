import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  listNavItem: Array<navItem> =
  [
    {
      name: 'Activiter',
      link: 'activiter'
    },
    {
      name: 'Chambre',
      link: 'chambre'
    },
    {
      name: 'Reservation',
      link: 'reservation'
    },
    {
      name: 'Utilisateur',
      link: 'utilisateur'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
export interface navItem{
  name: string;
  link: string;
}
