import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Experience } from '../../models/experience';
import { ExperiencesService } from '../../services/experiences.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Properties
  experiences: Experience[] = [];

  constructor(private experienceService: ExperiencesService) {}

  ngOnInit() { 
    // Hämta befintliga inlägg i databasen
    this.experienceService.getData().subscribe(
      (experiences) => {
        this.experiences = experiences;
        // console.log(experiences);
      }
    );
  }
  deletePost(id: number) {
    this.experienceService.deleteData(id).subscribe({
      next: () => {
        console.log(`Inlägg med ID ${id} har raderats.`);
        this.experiences.filter(experience => experience.id !== id);
        this.experienceService.getData().subscribe(experiences => {
          this.experiences = experiences;
        });
      },
      error: err => console.error('Fel vid radering:', err)
    });
  }
}
