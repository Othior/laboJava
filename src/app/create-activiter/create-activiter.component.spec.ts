import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateActiviterComponent } from './create-activiter.component';

describe('CreateActiviterComponent', () => {
  let component: CreateActiviterComponent;
  let fixture: ComponentFixture<CreateActiviterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateActiviterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateActiviterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
