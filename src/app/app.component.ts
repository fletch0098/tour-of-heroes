// Angular
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

// Compnents
import { HeroesComponent } from './heroes/heroes.component'
import { MessagesComponent } from './shared/messages/messages.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeroesComponent, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tour of Heroes';
}
