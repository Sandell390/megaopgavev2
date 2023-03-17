import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarviewDetailComponent } from './carview-detail.component';

describe('CarviewDetailComponent', () => {
  let component: CarviewDetailComponent;
  let fixture: ComponentFixture<CarviewDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarviewDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarviewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
