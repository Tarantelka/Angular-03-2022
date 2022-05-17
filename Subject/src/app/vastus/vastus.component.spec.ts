import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VastusComponent } from './vastus.component';

describe('VastusComponent', () => {
  let component: VastusComponent;
  let fixture: ComponentFixture<VastusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VastusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VastusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
