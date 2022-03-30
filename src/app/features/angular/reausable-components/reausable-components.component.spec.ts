import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReausableComponentsComponent } from './reausable-components.component';

describe('ReausableComponentsComponent', () => {
  let component: ReausableComponentsComponent;
  let fixture: ComponentFixture<ReausableComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReausableComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReausableComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
