import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {
  // Properties
  url: string = 'http://localhost:3000/api/workexperience';
  constructor(private http:HttpClient) { }

  // Metod
  // Hämta data från url
  getData(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.url);
  }
}
