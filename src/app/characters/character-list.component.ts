import { Component, OnInit } from '@angular/core';
import { Character } from './character';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  constructor(private characterService: CharacterService) { }


pageTitle: String = 'Character List';
characters: Character[];
acquiredCharacters: Character[];
charactersAcquired = false;
charactersDisplayed = false;


getAcquiredCharacters(): void {
  this.characterService.getCharacters()
  .subscribe(acquiredCharacters => this.acquiredCharacters = acquiredCharacters);
  this.charactersAcquired = !this.charactersAcquired;
  console.log('Getting Characters... : ',  this.charactersAcquired);
}

getCharacters(): void {
  this.characters = this.acquiredCharacters;
  this.charactersDisplayed = !this.charactersDisplayed;
  console.log('Displaying Characters... : ', this.characters);
}

  ngOnInit() {
    // this.getAcquiredCharacters();
  }

}
