import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorrutamineComponent } from './korrutamine.component';

describe('KorrutamineComponent', () => {
  let component: KorrutamineComponent;
  let fixture: ComponentFixture<KorrutamineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorrutamineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KorrutamineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
