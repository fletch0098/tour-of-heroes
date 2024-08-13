import {Component, Input} from '@angular/core';
import { UpperCasePipe, NgFor, NgIf } from '@angular/common';
import {Hero} from '../hero.interface'
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgFor, NgIf],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent {

  @Input() hero?: Hero;

}
