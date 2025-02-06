import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimalsComponent } from './features/animals/animals.component';
import { PigComponent } from './features/pig/pig.component';
import { MusicComponent } from './features/music/music.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AnimalsComponent, PigComponent, MusicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'animal-farm-frontend';
}
