import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsModalComponent } from './restaurants-modal.component';

describe('RestaurantsModalComponent', () => {
  let component: RestaurantsModalComponent;
  let fixture: ComponentFixture<RestaurantsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
