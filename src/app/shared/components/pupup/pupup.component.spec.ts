import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PupupComponent } from './pupup.component';

describe('PupupComponent', () => {
  let component: PupupComponent;
  let fixture: ComponentFixture<PupupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PupupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PupupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
