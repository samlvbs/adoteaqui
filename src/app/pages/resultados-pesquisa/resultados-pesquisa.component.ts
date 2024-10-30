import { Component, inject, OnInit } from '@angular/core';
import { CardPetsComponent } from "../../shared/components/card-pets/card-pets.component";
import * as db from '../../../assets/db.json';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Pets } from '../../../Models/Pets';



@Component({
  selector: 'app-resultados-pesquisa',
  templateUrl: './resultados-pesquisa.component.html',
  styleUrls: ['./resultados-pesquisa.component.scss'],
  standalone: true,
  imports: [CardPetsComponent, RouterLink]
})
export class ResultadosPesquisaComponent implements OnInit {
  city: string ='';
  state: string ='';
  dogs: boolean = false;
  cats: boolean = false;
  pets: Pets[] = [];
  petList: Pets[] = [];

  private readonly _activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.pets = (db as any).pets;
    this.city = this._activatedRoute.snapshot.queryParams['city'];
    this.state = this._activatedRoute.snapshot.queryParams['state'];
    this.cats = this._activatedRoute.snapshot.queryParams['isEnableCat'] === 'true';
    this.dogs = this._activatedRoute.snapshot.queryParams['isEnableDog'] === 'true';
    this.petList = this.getPets();
  }

  getPets(): Pets[] {
    return this.pets.filter(pet => {
      const matchCity = this.city ? pet.cidade === this.city : true;
      const matchType = (this.dogs && pet.tipo === 'cachorro') || (this.cats && pet.tipo === 'gato') || (!this.dogs && !this.cats);
      return matchCity && matchType;
    });



  }
}
