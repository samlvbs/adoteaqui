import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngsComponent } from './ongs.component';

describe('OngsComponent', () => {
  let component: OngsComponent;
  let fixture: ComponentFixture<OngsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OngsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OngsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
