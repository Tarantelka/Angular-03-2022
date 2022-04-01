import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedelComponent } from './redel.component';

describe('RedelComponent', () => {
  let component: RedelComponent;
  let fixture: ComponentFixture<RedelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
