import { Component,OnInit } from '@angular/core';
import { Stagaire } from '../models/Stagaire';
import { StagiaireService } from '../stagiaire.service';
@Component({
  selector: 'app-liststagaires',
  templateUrl: './liststagaires.component.html',
  styleUrl: './liststagaires.component.scss'
})
export class ListstagairesComponent {
  stagiaires: Stagaire[] = [];

  constructor(private stagiaireService: StagiaireService) { }

  ngOnInit(): void {
    this.getStagiaires();
  }

  private getStagiaires() {
    this.stagiaireService.getStagiairesList().subscribe(data => {
      this.stagiaires = data;
    });
  }

  updateStagaire(id: number) {
    // Logique pour mettre à jour un stagiaire, comme rediriger vers un formulaire de mise à jour
    console.log(`Mise à jour du stagiaire avec l'ID : ${id}`);
  }

  deleteStagiaire(id: number) {
    this.stagiaireService.deleteStagiaire(id).subscribe(data => {
      console.log('Stagiaire supprimé');
      this.getStagiaires(); // Rafraîchir la liste après suppression
    });
  }

  stagaireDetails(id: number) {
    // Logique pour afficher les détails d'un stagiaire, comme rediriger vers une page de détails
    console.log(`Afficher les détails du stagiaire avec l'ID : ${id}`);
  }
}