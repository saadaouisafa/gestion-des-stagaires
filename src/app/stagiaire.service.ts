import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stagaire } from './models/Stagaire';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

  private baseURL = "http://localhost:9098/api"; // Assurez-vous que l'URL est correcte

  constructor(private httpClient: HttpClient) { }
  
  getStagiairesList(): Observable<Stagaire[]> {
    return this.httpClient.get<Stagaire[]>(this.baseURL);
  }

  createStagiaire(stagiaire: Stagaire): Observable<Stagaire> {
    return this.httpClient.post<Stagaire>(this.baseURL, stagiaire);
  }

  getStagiaireById(id: number): Observable<Stagaire> {
    return this.httpClient.get<Stagaire>(`${this.baseURL}/${id}`);
  }

  updateStagiaire(id: number, stagiaire: Stagaire): Observable<Stagaire> {
    return this.httpClient.put<Stagaire>(`${this.baseURL}/${id}`, stagiaire);
  }

  deleteStagiaire(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/${id}`);
  }
}
