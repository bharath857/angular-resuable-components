import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptAdvancedComponent } from './javascript-advanced.component';

describe('JavascriptAdvancedComponent', () => {
  let component: JavascriptAdvancedComponent;
  let fixture: ComponentFixture<JavascriptAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptAdvancedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
