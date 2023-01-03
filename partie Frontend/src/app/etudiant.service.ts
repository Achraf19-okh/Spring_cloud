import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from './types/etudiant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private baseUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  // Method to retrieve a list of all Etudiants
  getEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(`${this.baseUrl}/Etudiants`);
  }

  getEtudiant(id: string): Observable<Etudiant> {
    return this.http.get<Etudiant>(`${this.baseUrl}/Etudiants/${id}`);
  }

  createEtudiant(Etudiant: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(`${this.baseUrl}/Etudiants`, Etudiant);
  }

  updateEtudiant(id: number, Etudiant: Etudiant): Observable<Etudiant> {
    return this.http.put<Etudiant>(`${this.baseUrl}/Etudiants/${id}`, Etudiant);
  }

  deleteEtudiant(id: number): Observable<Etudiant> {
    return this.http.delete<Etudiant>(`${this.baseUrl}/Etudiants/${id}`);
  }
}