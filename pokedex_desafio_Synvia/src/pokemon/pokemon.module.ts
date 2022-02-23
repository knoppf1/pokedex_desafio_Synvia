import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonListaComponent } from './pokemon-lista/pokemon-lista.component';

import { PokemonFavoritosComponent } from './pokemon-favoritos/pokemon-favoritos.component';



@NgModule({
  declarations: [
    PokemonListaComponent,

    PokemonFavoritosComponent,

  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
