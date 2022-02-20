import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-lista',
  templateUrl: './pokemon-lista.component.html',
  styleUrls: ['./pokemon-lista.component.scss']
})
export class PokemonListaComponent implements OnInit {
  itens: any[] = [];
  favoritos: any[] = [];
  favorito = { nome:[],national:[]}

  constructor(
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    this.load();
    console.log('Load')
  }

  load() {
    this.pokemonService.listMarcas().subscribe((res) => {
      console.log(typeof res);
      console.log('res pokemon',res);
      this.itens = res.results;

    })
  }

  alterarAtivo(_$event: any,  national_number : number, name: string, type: string){
    console.log("National number:", national_number,"Nome:",name, "Tipo:", type);
    // this.favorito.nome.push(name);
    // this.favorito.national.push(national_number)
  }

}
