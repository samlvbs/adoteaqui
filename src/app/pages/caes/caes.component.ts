import { Component, OnInit } from '@angular/core';
import { CardPetsComponent } from "../../shared/components/card-pets/card-pets.component";
import { CommonModule } from '@angular/common';
import * as db from '../../../assets/db.json';
import { Pets } from '../../../Models/Pets';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-caes',
  standalone: true,
  imports: [CardPetsComponent, RouterLink],
  templateUrl: './caes.component.html',
  styleUrl: './caes.component.scss'
})
export class CaesComponent {
  pets: Pets[] = [];
  dogList: Pets[] = [];

  ngOnInit(): void {
    this.pets = (db as any).pets;
    this.dogList = this.getDogs();
  }

  getDogs(): any[] {
    return this.pets.filter(pet => pet.tipo === 'cachorro' && pet.status === 'disponivel');
  }
}
