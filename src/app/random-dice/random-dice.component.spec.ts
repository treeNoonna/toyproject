import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomDiceComponent } from './random-dice.component';

describe('RandomDiceComponent', () => {
  let component: RandomDiceComponent;
  let fixture: ComponentFixture<RandomDiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomDiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
