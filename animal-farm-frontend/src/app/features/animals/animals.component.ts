import { Component } from '@angular/core';
import { AnimalsService } from './animals.service';
import { Animal } from './animal.model';
import { CommonModule, NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { PigComponent } from '../pig/pig.component';
import { AnimalStateService } from './animal-state.service';

@Component({
  selector: 'app-animals',
  imports: [ MatButtonModule, CommonModule, NgFor, PigComponent],
  templateUrl: './animals.component.html',
  styleUrl: './animals.component.scss',
})
export class AnimalsComponent {
  animals: Animal[] = [];
  isThanking: { [key: string]: boolean } = {};

  constructor(
    private animalsService: AnimalsService,
    private animalStateService: AnimalStateService
  ) {}

  ngOnInit() {
    this.loadAnimals();
  }

  loadAnimals() {
    this.animalsService.getAnimals().subscribe((data) => {
      this.animals = data.map(animal => ({
        ...animal,
        id: animal._id
      }));
      
    });
  }

  feedAnimal(id: string, name: string) {
    this.isThanking[id] = true;
    this.animalsService.feedAnimal(id).subscribe((data) => {
      this.loadAnimals(); 
      if (data.pigState == "happy") {
        this.animalStateService.updatePigStatus('happy');
      } else {
        this.animalStateService.updatePigStatus('neutral');
      }
    });

    this.animalStateService.triggerThankYou(name);
    // Reset animation after 3 seconds
    setTimeout(() => {
      this.isThanking[id] = false;
    }, 3000);
  }
}
