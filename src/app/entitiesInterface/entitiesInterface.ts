export interface Activiter{
  id: number;
  nom: string;
  description: string;
}

export interface createActiviter{
  nom: string;
  description: string;
}

export interface Chambre{
  id: number;
  adresse: string;
  ville: string;
  place: number;
  idUser: number;
}

export interface createChambre{
  adresse: string;
  ville: string;
  place: number;
  idUser: number;
}

export interface Reservation{
  id: number;
  personne: number;
  datearriver: Date;
  datedepart: Date;
  iduser: number;
  idchambre: number;
}

export interface createReservation{
  personne: number;
  datearriver: Date;
  datedepart: Date;
  iduser: number;
  idchambre: number;
}

export interface Utilisateur{
  id: number;
  pseudo: string;
  password: string;
  lastname: string;
  firstname: string;
  email: string;
}

export interface createUtilisateur{
  pseudo: string;
  password: string;
  lastname: string;
  firstname: string;
  email: string;
}
