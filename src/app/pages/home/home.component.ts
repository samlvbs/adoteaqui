import { Component, inject, OnInit } from '@angular/core';
import { NavComponent } from '../../shared/nav/nav.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { StatesService } from '../../services/states.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSelect, MatOption } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { CitiesService } from '../../services/cities.service';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, FooterComponent, MatSelect, MatOption, MatSlideToggle, ReactiveFormsModule, ButtonComponent, HttpClientModule, CommonModule, MatFormFieldModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [StatesService]
})
export class HomeComponent implements OnInit {
  states: any[] = [];
  cities: any[] = [];
  selectedState: string =''

  private _formBuilder = inject(FormBuilder);

  constructor(
    private _statesService: StatesService,
    private _citiesService: CitiesService
  ){}

  ngOnInit(){
    this._statesService.getStates().subscribe((statesResponse) =>{
      this.states = statesResponse;
      console.log('Estados:  ', statesResponse);
    })
  }

  onStateSelected(state: string){
    this.selectedState = state;

    this._citiesService.getCities(state).subscribe((citiesResponse) =>{
      this.cities = citiesResponse;
      console.log('Cidades: ', citiesResponse)
    })
  }
  findForm = new FormGroup({
    citieSelect: new FormControl(''),
    stateSelect: new FormControl(''),
    enableDog: new FormControl(false),
    enableCat: new FormControl(false)
  })


  handleSubmit(){
    alert('Estado : ' + this.findForm.value.stateSelect +
          '\n Cidade : '+ this.findForm.value.citieSelect +
          '\n Caes? : '+ this.findForm.value.enableDog +
          '\n Gatos? : '+ this.findForm.value.enableCat
        )
  }
}
