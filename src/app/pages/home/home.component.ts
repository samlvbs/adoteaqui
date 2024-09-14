import { Component, inject, OnInit } from '@angular/core';
import { NavComponent } from '../../shared/nav/nav.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ToggleComponent } from '../../shared/components/toggle/toggle.component';
import { StatesService } from '../../services/states.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSelect, MatOption } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { CitiesService } from '../../services/cities.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, FooterComponent, ToggleComponent, MatSelect, MatOption, ReactiveFormsModule, ButtonComponent, HttpClientModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [StatesService]
})
export class HomeComponent implements OnInit {
  states: any[] = [];
  cities: any[] = [];
  constructor(
    private _statesService: StatesService,
    private _citiesService: CitiesService
  ){}

  ngOnInit(){
      this._statesService.getStates().subscribe((statesResponse) =>{
        this.states = statesResponse;
        console.log('Estados:  ', statesResponse);
      })

      this._citiesService.getCities('São paulo').subscribe((citiesResponse) =>{
        this.cities = citiesResponse;
        console.log('Cidades: ', citiesResponse)
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
