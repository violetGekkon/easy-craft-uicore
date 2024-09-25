import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyCraftUicoreComponent } from './easy-craft-uicore.component';

describe('EasyCraftUicoreComponent', () => {
  let component: EasyCraftUicoreComponent;
  let fixture: ComponentFixture<EasyCraftUicoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EasyCraftUicoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EasyCraftUicoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
