import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JagamineComponent } from './jagamine.component';

describe('JagamineComponent', () => {
  let component: JagamineComponent;
  let fixture: ComponentFixture<JagamineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JagamineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JagamineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
