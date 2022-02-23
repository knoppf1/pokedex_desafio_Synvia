import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-favoritos',
  templateUrl: './pokemon-favoritos.component.html',
  styleUrls: ['./pokemon-favoritos.component.scss']
})
export class PokemonFavoritosComponent implements OnInit {

  itens: any[] = [];
  result: any[] = [];
  favoritos: any[] = [];

  constructor(
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    this.load();

  }

  // load() {
  //   this.pokemonService.listar().subscribe((res) => {
  //     this.itens = res.results;
  //   })
  //   console.log("Favoritos", this.itens)
  // }


  load() {
    this.pokemonService.listar().subscribe((res) => {
      this.itens = res;

    })
    console.log("Favoritos", this.itens)
  }

}
