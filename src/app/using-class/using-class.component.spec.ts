import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingClassComponent } from './using-class.component';

describe('UsingClassComponent', () => {
  let component: UsingClassComponent;
  let fixture: ComponentFixture<UsingClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsingClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsingClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
