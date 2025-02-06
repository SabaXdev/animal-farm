import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from './animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  private baseUrl = 'http://localhost:3000/api/animals';

  constructor(private http: HttpClient) { }

  getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.baseUrl);
  }

  feedAnimal(id: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}/feed`, {});
  }
}
