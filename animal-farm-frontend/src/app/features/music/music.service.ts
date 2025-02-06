import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  private apiUrl = 'http://localhost:3000/api/music/toggle';

  constructor(private http: HttpClient) {}

  toggleMusic(): Observable<{ isPlaying: boolean; message: string }> {
    return this.http.post<{ isPlaying: boolean; message: string }>(this.apiUrl, {});
  }
}
