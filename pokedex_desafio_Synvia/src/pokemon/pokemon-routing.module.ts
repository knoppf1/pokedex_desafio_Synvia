import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonFavoritosComponent } from './pokemon-favoritos/pokemon-favoritos.component';
import { PokemonListaComponent } from './pokemon-lista/pokemon-lista.component';

const routes: Routes = [
  {
    path: '', component:PokemonListaComponent
  },
  {
    path: 'lista', component:PokemonListaComponent
  },
  {
    path: 'favoritos', component:PokemonFavoritosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
