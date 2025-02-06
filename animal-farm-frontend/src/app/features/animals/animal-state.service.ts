import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalStateService {
  private pigStatusSubject = new BehaviorSubject<string>('neutral'); 
  private thankYouAnimals = new BehaviorSubject<string | null>(null);

  pigStatus$ = this.pigStatusSubject.asObservable(); 
  thankYouAnimals$ = this.thankYouAnimals.asObservable();

  updatePigStatus(status: string) {
    this.pigStatusSubject.next(status);
  }

  triggerThankYou(animalName: string) {
    this.thankYouAnimals.next(animalName);

    // Reset after animation duration (e.g., 3 seconds)
    setTimeout(() => {
      this.thankYouAnimals.next(null);
    }, 3000);
  }
}
