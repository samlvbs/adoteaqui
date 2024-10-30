import { Component, inject, OnInit } from '@angular/core';
import { NavComponent } from '../../shared/nav/nav.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { StatesService } from '../../services/states.service';
import { MatSelect, MatOption } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { CitiesService } from '../../services/cities.service';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, FooterComponent, MatSelect, MatOption, MatSlideToggle, ReactiveFormsModule, ButtonComponent, CommonModule, MatFormFieldModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [StatesService]
})
export class HomeComponent implements OnInit {
  states: any[] = [];
  cities: any[] = [];
  selectedState: string ='São Paulo'

  private readonly _statesService = inject(StatesService);
  private readonly _citiesService = inject(CitiesService);
  private readonly _router = inject(Router);

  findForm!: FormGroup;

  ngOnInit() {
    // Inicializando o FormGroup com o valor padrão "São Paulo" para stateSelect
    this.findForm = new FormGroup({
      citieSelect: new FormControl(''),
      stateSelect: new FormControl(this.selectedState), // Valor padrão
      enableDog: new FormControl(false),
      enableCat: new FormControl(false)
    });

    // Carregando os estados e garantindo o valor padrão após a resposta
    this._statesService.getStates().subscribe((statesResponse) => {
      this.states = statesResponse;
      console.log('Estados: ', statesResponse);

      // Se o valor do stateSelect ainda não estiver definido, atribuímos "São Paulo"
      if (this.selectedState) {
        this.onStateSelected(this.selectedState);
      }
    });
  }

  onStateSelected(state: string) {
    this.selectedState = state;
    this._citiesService.getCities(state).subscribe((citiesResponse) => {
      this.cities = citiesResponse;
      console.log('Cidades: ', citiesResponse);
    });
  }

  handleSubmit() {
    const { citieSelect: city, stateSelect: state, enableDog, enableCat } = this.findForm.value;
    this._router.navigate(['resultados-pesquisa'], {
      queryParams: {
        city,
        state,
        isEnableCat: enableCat ? 'true' : 'false',
        isEnableDog: enableDog ? 'true' : 'false'
      }
    });
  }
}
