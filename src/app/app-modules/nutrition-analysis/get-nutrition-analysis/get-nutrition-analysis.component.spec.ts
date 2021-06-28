import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNutritionAnalysisComponent } from './get-nutrition-analysis.component';

describe('GetNutritionAnalysisComponent', () => {
  let component: GetNutritionAnalysisComponent;
  let fixture: ComponentFixture<GetNutritionAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetNutritionAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetNutritionAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
