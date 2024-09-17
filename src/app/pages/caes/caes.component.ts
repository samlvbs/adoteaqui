import { Component } from '@angular/core';
import { CardPetsComponent } from "../../shared/components/card-pets/card-pets.component";

@Component({
  selector: 'app-caes',
  standalone: true,
  imports: [CardPetsComponent],
  templateUrl: './caes.component.html',
  styleUrl: './caes.component.scss'
})
export class CaesComponent {
  linkImg: string = '../../../assets/dogteste.jpg';
  altImg: string = 'Foto de um pet';
  namePet: string = 'Bobby';
  infosPet: string = 'Cachorro, 2 anos';
  localPet: string = 'São Paulo';

}
