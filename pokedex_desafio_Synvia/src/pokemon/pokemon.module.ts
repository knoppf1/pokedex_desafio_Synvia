import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
    FormsModule,
    ReactiveFormsModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
