import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Pokemon } from './interfaces/pokemon.interface'; // Importa la interfaz Pokemon

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) { }

  getPokemon(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(
      map(data => ({
        name: data.name,
        sprites: {
          front_default: data.sprites.front_default
        }
      })),
      catchError((error: HttpErrorResponse) => {
        console.error('Error al obtener el Pokémon:', error);
        return throwError(() => new Error('Error al obtener el Pokémon'));
      })
    );
  }
}
