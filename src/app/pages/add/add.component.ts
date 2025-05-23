import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExperiencesService } from '../../services/experiences.service';
import { Experience } from '../../models/experience';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  imports: [CommonModule, FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  companyname: string = '';
  jobtitle: string = '';
  location: string = '';
  startdate: string = '';
  enddate: string = '';
  description: string = '';
  error: string = '';

  constructor( private experienceService: ExperiencesService, private router: Router) {}
  
  addData() {
    let newExperience: Experience = {
      companyname: this.companyname,
      jobtitle: this.jobtitle,
      location: this.location,
      startdate: this.startdate,
      enddate: this.enddate,
      description: this.description
    };

    this.experienceService.postData(newExperience).subscribe({
      next: response => {
        console.log(response);
        this.router.navigate(['/']);
      },
      error: err => {
        this.error = err.error.message;
      }
    });
  }
}
