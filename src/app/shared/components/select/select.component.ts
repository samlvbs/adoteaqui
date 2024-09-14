import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [MatInputModule, MatSelectModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  @Input() label!: string;
  @Input() option!: {value: string, viewValue: string}[];

  @Output() selected = new EventEmitter<string>();
  onSelect(value: string){
    this.selected.emit(value)
  }
}
