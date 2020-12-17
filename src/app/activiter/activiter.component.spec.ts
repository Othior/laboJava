import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviterComponent } from './activiter.component';

describe('ActiviterComponent', () => {
  let component: ActiviterComponent;
  let fixture: ComponentFixture<ActiviterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiviterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiviterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
