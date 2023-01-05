import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr. IW', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
