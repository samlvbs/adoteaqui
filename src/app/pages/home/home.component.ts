import { Component } from '@angular/core';
import { NavComponent } from '../../shared/nav/nav.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, FooterComponent, ReactiveFormsModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  findForm = new FormGroup({
    tipo: new FormControl(''),
    local: new FormControl('')
  })

  handleSubmit(){
    alert('Tipo do pet: '+ this.findForm.value.tipo + ' Localidade: ' + this.findForm.value.local)
  }
}
