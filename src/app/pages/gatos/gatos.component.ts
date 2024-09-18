import { Component, OnInit } from '@angular/core';
import { CardPetsComponent } from "../../shared/components/card-pets/card-pets.component";
import { CommonModule } from '@angular/common';
import * as db from '../../../assets/db.json';

@Component({
  selector: 'app-gatos',
  standalone: true,
  imports: [CardPetsComponent, CommonModule],
  templateUrl: './gatos.component.html',
  styleUrl: './gatos.component.scss'
})
export class GatosComponent {
  pets: any[] = [];

  ngOnInit(): void {
    this.pets = (db as any).pets;
  }

  getCats(): any[] {
    return this.pets.filter(pet => pet.tipo === 'gato' && pet.status === 'disponivel');
  }
}
