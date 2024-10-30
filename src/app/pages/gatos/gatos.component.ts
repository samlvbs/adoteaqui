import { Component, OnInit } from '@angular/core';
import { CardPetsComponent } from "../../shared/components/card-pets/card-pets.component";
import * as db from '../../../assets/db.json';
import { RouterLink } from '@angular/router';
import { Pets } from '../../../Models/Pets';

@Component({
  selector: 'app-gatos',
  standalone: true,
  imports: [CardPetsComponent, RouterLink],
  templateUrl: './gatos.component.html',
  styleUrl: './gatos.component.scss'
})
export class GatosComponent {
  pets: Pets[] = [];
  catList: Pets[] = [];

  ngOnInit(): void {
    this.pets = (db as any).pets;
    this.catList = this.getCats();
  }

  getCats(): any[] {
    return this.pets.filter(pet => pet.tipo === 'gato' && pet.status === 'disponivel');
  }
}
