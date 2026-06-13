import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarwingApp } from './darwing-app';

describe('DarwingApp', () => {
  let component: DarwingApp;
  let fixture: ComponentFixture<DarwingApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarwingApp],
    }).compileComponents();

    fixture = TestBed.createComponent(DarwingApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
