import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFavoritosComponent } from './pokemon-favoritos.component';

describe('PokemonFavoritosComponent', () => {
  let component: PokemonFavoritosComponent;
  let fixture: ComponentFixture<PokemonFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonFavoritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
