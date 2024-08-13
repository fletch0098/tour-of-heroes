import {Component, Input} from '@angular/core';
import { UpperCasePipe, NgFor, NgIf, Location } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ActivatedRoute } from '@angular/router';

import {Hero} from '../Interfaces/hero.interface'
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgFor, NgIf],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent {

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  // Hero
  @Input() hero?: Hero;

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    // Get route data
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Get Hero
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

}
