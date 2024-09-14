import { Component, inject, OnInit } from '@angular/core';
import { NavComponent } from '../../shared/nav/nav.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/button/button.component';
import { ToggleComponent } from '../../shared/toggle/toggle.component';
import { StatesService } from '../../services/states.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, FooterComponent, ToggleComponent, ReactiveFormsModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
    private readonly _statesService = inject(StatesService);

    constructor(){
      
    }

  ngOnInit(){
      this._statesService.getStates().subscribe((statesResponse) =>{
        console.log('Paises: ', statesResponse)
      })
  }

  findForm = new FormGroup({
    tipo: new FormControl(''),
    local: new FormControl('')
  })

  handleSubmit(){
    alert('Tipo do pet: '+ this.findForm.value.tipo + ' Localidade: ' + this.findForm.value.local)
  }
}
