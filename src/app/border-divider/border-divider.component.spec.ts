import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderDividerComponent } from './border-divider.component';

describe('BorderDividerComponent', () => {
  let component: BorderDividerComponent;
  let fixture: ComponentFixture<BorderDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderDividerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorderDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
