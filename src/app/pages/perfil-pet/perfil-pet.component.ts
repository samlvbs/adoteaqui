import { Component, inject, Input} from '@angular/core';
import { Pets } from '../../../Models/Pets';
import { PetListService } from '../../services/pet-list.service';
import {MatIconModule} from '@angular/material/icon';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';


@Component({
  selector: 'app-perfil-pet',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './perfil-pet.component.html',
  styleUrl: './perfil-pet.component.scss'
})
export class PerfilPetComponent{
  pet: Pets | undefined ;

  private readonly _petListService = inject(PetListService)

  @Input() set petId(value: string){
    this.pet = this._petListService.getPet(value)
    console.log("Id do pet: ", value);
    console.log("Pet: ",this.pet);
  }
}
