import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RastaurantReviewComponent } from './rastaurant-review.component';

describe('RastaurantReviewComponent', () => {
  let component: RastaurantReviewComponent;
  let fixture: ComponentFixture<RastaurantReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RastaurantReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RastaurantReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
