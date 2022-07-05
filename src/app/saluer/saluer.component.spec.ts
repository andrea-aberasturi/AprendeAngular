import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaluerComponent } from './saluer.component';

describe('SaluerComponent', () => {
  let component: SaluerComponent;
  let fixture: ComponentFixture<SaluerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaluerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaluerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
