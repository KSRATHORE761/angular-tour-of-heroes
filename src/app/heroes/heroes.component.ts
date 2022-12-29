import { Component,OnInit } from '@angular/core';
import { Hero } from '../hero';
import {FormsModule} from '@angular/forms'
import{HEREOES} from '../mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEREOES;
  selectedHero? : Hero;
  constructor(){}
  ngOnInit(): void {
      
  }
  onSelect(hero : Hero){
    this.selectedHero= hero;
  }
}
