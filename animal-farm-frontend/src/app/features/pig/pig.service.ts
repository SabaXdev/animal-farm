import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pig } from './pig.model';
import { Animal } from '../animals/animal.model';

@Injectable({ providedIn: 'root' })
export class PigService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getPig(): Observable<Pig | null> {
    return this.http.get<Animal[]>(`${this.baseUrl}/animals`).pipe(
      map((animals: Animal[]) => {
        const pig = animals.find(animal => animal.type === 'Pig');
        if (!pig) return null;

        // Convert Animal to Pig
        return {
          pigId: pig._id,
          name: pig.name,
          currentStatus: 'neutral',
          imageUrl: pig.imageUrl,
          updatedAt: new Date()
        } as Pig;
      })
    );
  }

  getPigStatus(): Observable<{ state: string }> {
    return this.http.get<{ state: string }>(`${this.baseUrl}/pig/status`);
  }
}
