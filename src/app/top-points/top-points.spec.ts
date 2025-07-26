import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPoints } from './top-points';

describe('TopPoints', () => {
  let component: TopPoints;
  let fixture: ComponentFixture<TopPoints>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopPoints]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopPoints);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
