import { Component } from '@angular/core';
import { Pig } from './pig.model';
import { PigService } from './pig.service';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule} from '@angular/common';
import { AnimalStateService } from '../animals/animal-state.service';
import { interval } from 'rxjs';
import { MusicService } from '../music/music.service';

@Component({
  selector: 'app-pig',
  imports: [MatButtonModule, CommonModule],
  templateUrl: './pig.component.html',
  styleUrl: './pig.component.scss'
})
export class PigComponent {
  pig: Pig | null = null;
  isRotated = false;
  isMusicPlaying = false;
  manualOverride = false;
  audio = new Audio();

  constructor(
    private pigService: PigService,
    private animalStateService: AnimalStateService,
    private musicService: MusicService
  ) {}

  ngOnInit() {
    this.loadPig();
    this.loadPigStatus();
    this.animalStateService.pigStatus$.subscribe((status) => {
      if (!this.manualOverride && this.pig) {
        this.pig!.imageUrl = status == "happy" 
          ? 'http://localhost:4200/ღორი_გახარებული.jpg' 
          : 'http://localhost:4200/ღორი_ჩვეულებრივი.jpg';
      }
    });

      // Polling: Check pig status from backend every second
    interval(1000).subscribe(() => {
      this.pigService.getPigStatus().subscribe((data) => {
        if (this.pig && !this.manualOverride) {
          this.pig.currentStatus = data.state as "neutral" | "happy" | "putin";
          this.animalStateService.updatePigStatus(this.pig.currentStatus); // Update image dynamically
        }
      });
    });
  }

  loadPig() {
    this.pigService.getPig().subscribe((data) => {
      this.pig = data;
    })
  }

  loadPigStatus() {
    this.pigService.getPigStatus().subscribe((data) => {
      if (this.pig) {
        this.pig!.currentStatus = data.state as "neutral" | "happy" | "putin";
      }
    });
  }


  togglePigState() {
    this.isRotated = !this.isRotated;
    this.manualOverride = true;

    if (this.pig) {
      this.pig.imageUrl = this.isRotated
        ? 'http://localhost:4200/პუტინი.png'
        : 'http://localhost:4200/ღორი_ჩვეულებრივი.jpg';
    }

    if (this.isMusicPlaying) {
      this.toggleMusic();
    }
  }

  toggleMusic() {
    this.musicService.toggleMusic().subscribe((response) => {
      this.isMusicPlaying = response.isPlaying;
      this.audio.src = this.isRotated
        ? 'რუსეთის_ჰიმნი.mp3'
        : 'ჩემი_საქართველო_აქ_არის.mp3';
      this.isMusicPlaying ? this.audio.play() : this.audio.pause();
    });
  }

}
