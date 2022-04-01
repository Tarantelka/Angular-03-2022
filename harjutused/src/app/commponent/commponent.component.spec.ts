import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommponentComponent } from './commponent.component';

describe('CommponentComponent', () => {
  let component: CommponentComponent;
  let fixture: ComponentFixture<CommponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
