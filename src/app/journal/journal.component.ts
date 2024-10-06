import { Component, Input, OnInit } from '@angular/core';

interface TableRow {
    date: string;
    objectives: string;
    activities: string;
}

interface InternshipStage {
    period: string;
    service: string;
    objectives: string;
    activities: string;
    observations: string;
}

@Component({
    selector: 'app-journal',
    templateUrl: './journal.component.html',
    styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {
    @Input() durationInWeeks: number = 1;
    tableRows: TableRow[] = [];

    hostInstitution: string = 'MEDIANET';
    internName: string = '';
    specialty: string = '';
    professionalSupervisor: string = '';
    date: string = '';
    
    stages: InternshipStage[] = [
        { period: '', service: '', objectives: '', activities: '', observations: '' },
        { period: '', service: '', objectives: '', activities: '', observations: '' },
        { period: '', service: '', objectives: '', activities: '', observations: '' }
    ];

    ngOnInit() {
        this.generateRows();
    }

    generateRows() {
        const daysPerWeek = 5; // Supposons une semaine de travail de 5 jours
        const totalDays = this.durationInWeeks * daysPerWeek;

        this.tableRows = Array(totalDays).fill(null).map(() => ({
            date: '',
            objectives: '',
            activities: ''
        }));
    }

    // Fonction pour vérifier si le formulaire est valide
    isFormValid(): boolean {
        return !!this.hostInstitution &&
               !!this.internName &&
               !!this.specialty &&
               !!this.professionalSupervisor &&
               !!this.date &&
               this.stages.every(stage => !!stage.period && !!stage.service && !!stage.objectives && !!stage.activities) &&
               this.tableRows.every(row => !!row.objectives && !!row.activities);
    }

    // Fonction pour imprimer
    print(): void {
        //if (this.isFormValid()) {
            window.print(); // Cela ouvrira la boîte de dialogue d'impression
       /* } else {
            alert("Veuillez remplir tous les champs requis avant d'imprimer.");
        }*/
    }
}
