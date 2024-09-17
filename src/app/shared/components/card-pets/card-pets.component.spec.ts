import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPetsComponent } from './card-pets.component';

describe('CardPetsComponent', () => {
  let component: CardPetsComponent;
  let fixture: ComponentFixture<CardPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
