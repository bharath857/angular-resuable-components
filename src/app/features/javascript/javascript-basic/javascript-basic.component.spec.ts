import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptBasicComponent } from './javascript-basic.component';

describe('JavascriptBasicComponent', () => {
  let component: JavascriptBasicComponent;
  let fixture: ComponentFixture<JavascriptBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
