import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterOutlet } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { MaterialModuleModule } from './material-module/material-module.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, MaterialModuleModule, PokemonListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'qrapp';
}
