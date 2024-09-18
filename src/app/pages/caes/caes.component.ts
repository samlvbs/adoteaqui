import { Component, OnInit } from '@angular/core';
import { CardPetsComponent } from "../../shared/components/card-pets/card-pets.component";
import { CommonModule } from '@angular/common';
import * as db from '../../../assets/db.json';

@Component({
  selector: 'app-caes',
  standalone: true,
  imports: [CardPetsComponent, CommonModule],
  templateUrl: './caes.component.html',
  styleUrl: './caes.component.scss'
})
export class CaesComponent {
  pets: any[] = [];

  ngOnInit(): void {
    this.pets = (db as any).pets;
  }

  getDogs(): any[] {
    return this.pets.filter(pet => pet.tipo === 'cachorro' && pet.status === 'disponivel');
  }
}
