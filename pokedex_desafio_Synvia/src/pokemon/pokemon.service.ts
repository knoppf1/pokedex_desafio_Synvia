import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import{ tap} from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly URL: string = 'https://unpkg.com/pokemons@1.1.0/pokemons.json';

  constructor(
    private http: HttpClient,

    private router:Router) { }

    listMarcas(): Observable<any> {
      console.log('Lista Pokemon')
      return this.http.get(this.URL).pipe(
        tap(pokemon =>console.log('Res lista Pokemons', pokemon))
      );
    }
}
