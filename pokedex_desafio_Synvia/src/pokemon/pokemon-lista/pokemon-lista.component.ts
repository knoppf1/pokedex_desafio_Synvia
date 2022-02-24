import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'app-pokemon-lista',
  templateUrl: './pokemon-lista.component.html',
  styleUrls: ['./pokemon-lista.component.scss']
})
export class PokemonListaComponent implements OnInit {
  itens: any[] = [];
  result: any[] = [];
  favoritos: any[] = [];
  cadastro: FormGroup;


  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.load();
     this.cadastro = this.fb.group({
      name: [''],
      national_number: [''],
    });
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

 save(_$event: any){this.pokemonService.adicionar(this.cadastro.value).subscribe(res => {})
      alert("Carregou Favorito!")
  }
}
