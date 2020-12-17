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
  nbPersonne: number;
  dateArriver: Date;
  dateDepart: Date;
  idUser: number;
  idChambre: number;
}

export interface createReservation{
  nbPersonne: number;
  dateArriver: Date;
  dateDepart: Date;
  idUser: number;
  idChambre: number;
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
