import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LahutamineComponent } from './lahutamine.component';

describe('LahutamineComponent', () => {
  let component: LahutamineComponent;
  let fixture: ComponentFixture<LahutamineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LahutamineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LahutamineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
