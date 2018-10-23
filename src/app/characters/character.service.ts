import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Character } from './character';

@Injectable({
    providedIn: 'root'
})
export class CharacterService {

  private charactersUrl = 'api/characters/';

  constructor(private http: HttpClient) {

  }

  getCharacters(): Observable<Character[]> {
  return this.http.get<Character[]>(this.charactersUrl)
  .pipe(
    tap(data => console.log('All: ' + JSON.stringify(data))),
    tap(characters => console.log('fetched characters')),
    catchError(this.handleError('getCharacters', []))
  );

}


private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    console.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}

}
