


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RombatloComponent } from './rombatlo.component';

describe('RombatloComponent', () => {
  let component: RombatloComponent;
  let fixture: ComponentFixture<RombatloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RombatloComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RombatloComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
