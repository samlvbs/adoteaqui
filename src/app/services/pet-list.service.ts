import { Injectable } from '@angular/core';
import * as db from '../../assets/db.json';
import { Pets } from '../../Models/Pets';
import { find } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetListService {
  pets: Pets[] = (db as any).pets;

  getPets(){
    return this.pets;
  }

  getPet(petId: string): any{
    return this.pets.find(pet=> pet.id === petId)
  }

}
