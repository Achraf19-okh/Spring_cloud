import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../Etudiant.service';
import { Etudiant } from '../types/etudiant';

@Component({
  selector: 'app-Etudiant',
  templateUrl: './Etudiant.component.html',
  styleUrls: ['./Etudiant.component.scss'],
})
export class EtudiantComponent implements OnInit {
  public Etudiants: Etudiant[];
  showForm = false;
  showUpdateForm = false;
  selectedEtudiant: Etudiant = {
    id: 0,
    nom: '',
    pays: '',
    capaciteStade: 0,
    dateFondation: new Date(),
  };
  Etudiant: Etudiant = {
    id: 0,
    nom: '',
    pays: '',
    capaciteStade: 0,
    dateFondation: new Date(),
  };

  constructor(private EtudiantService: EtudiantService) {
    this.Etudiants = [];
  }

  ngOnInit() {
    this.getEtudiants();
  }

  getEtudiants(): void {
    this.EtudiantService
      .getEtudiants()
      .subscribe((Etudiants) => (this.Etudiants = Etudiants));
  }

  getEtudiant(id: string): void {
    this.EtudiantService
      .getEtudiant(id)
      .subscribe((Etudiant) => (this.Etudiants = [Etudiant]));
  }

  createEtudiant(Etudiant: Etudiant): void {
    this.EtudiantService.createEtudiant(Etudiant).subscribe(() => this.getEtudiants());
    this.getEtudiants();
    this.showForm = false;
  }

  updateEtudiant(id: number, Etudiant: Etudiant): void {
    this.EtudiantService
      .updateEtudiant(id, Etudiant)
      .subscribe(() => this.getEtudiants());
      this.showUpdateForm = false;
  }

  deleteEtudiant(e: Etudiant): void {
    console.log('hehehe' + e.capaciteStade);
    this.EtudiantService.deleteEtudiant(e.id).subscribe(() => this.getEtudiants());
  }
}
