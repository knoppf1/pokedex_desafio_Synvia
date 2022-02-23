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
  private readonly apiUrl: string = 'http://localhost:3000/';

  constructor(
    private http: HttpClient,
    private router:Router) { }

    listMarcas(): Observable<any> {
      return this.http.get(this.URL).pipe(
        tap(pokemon =>console.log('Res lista Pokemons', pokemon))
      );
    }

    listar():Observable<any> {return this.http.get(this.apiUrl + 'favoritos').pipe(
        tap(favoritos =>console.log('Res lista Favoritotos', favoritos))
      );
    }

    // adicionar(name: string, national_number:string ): Observable<any> {return this.http.post(this.apiUrl + 'favoritos', name, national_number);
    // }

    adicionar(data: any ): Observable<any> {return this.http.post(this.apiUrl + 'favoritos', data);
    }

}
