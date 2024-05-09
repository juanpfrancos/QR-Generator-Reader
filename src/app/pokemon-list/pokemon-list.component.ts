import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../qr.service';
import { MaterialModuleModule } from '../material-module/material-module.module';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  imports: [CommonModule, MaterialModuleModule],
  providers: [PokemonService]
})
export class PokemonListComponent implements OnInit {
  pokemon:any; // Usa la interfaz Pokemon y asigna un valor por defecto de null
  isLoading = true;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemon(16);
  }

  getPokemon(id: number): void {
    this.isLoading = true;
    this.pokemonService.getPokemon(id).subscribe({
      next: (pokemon) => {
        this.pokemon = pokemon;
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Error al obtener el Pokémon:', error);
        this.isLoading = false;
      }
    });
  }
}
