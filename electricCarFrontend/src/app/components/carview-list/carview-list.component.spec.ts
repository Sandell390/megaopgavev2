import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarviewListComponent } from './carview-list.component';

describe('CarviewListComponent', () => {
  let component: CarviewListComponent;
  let fixture: ComponentFixture<CarviewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarviewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
