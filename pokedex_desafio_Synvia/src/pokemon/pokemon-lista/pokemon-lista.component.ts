import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-pokemon-lista',
  templateUrl: './pokemon-lista.component.html',
  styleUrls: ['./pokemon-lista.component.scss']
})
export class PokemonListaComponent implements OnInit {
  itens: any[] = [];
  result: any[] = [];
  favoritos: any[] = [];
  favorito = { nome:[],national:[]};


  constructor(
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.pokemonService.listMarcas().subscribe((res) => {
      this.result = res.results;
      this.itens = this.result.filter((thing, index, self) =>
      index === self.findIndex((t) => (
      t.place === thing.place && t.name === thing.name
      ))
      )
    })
  }


  alterarAtivo(_$event: any,  national_number : number, name: string, type: string){
    console.log("National number:", national_number,"Nome:",name, "Tipo:", type);

  };

  save(_$event: any,  name: string, national_number:string ) { this.pokemonService.adicionar(name).subscribe(_res => {  }) };

}
