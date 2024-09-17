import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pets',
  standalone: true,
  imports: [],
  templateUrl: './card-pets.component.html',
  styleUrl: './card-pets.component.scss'
})
export class CardPetsComponent {
  @Input() linkImg : string = '';
  @Input() altImg : string = '';
  @Input() namePet : string = '';
  @Input() infosPet : string = '';
  @Input() localPet : string = '';

}
