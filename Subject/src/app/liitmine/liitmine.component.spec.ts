import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiitmineComponent } from './liitmine.component';

describe('LiitmineComponent', () => {
  let component: LiitmineComponent;
  let fixture: ComponentFixture<LiitmineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiitmineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiitmineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
