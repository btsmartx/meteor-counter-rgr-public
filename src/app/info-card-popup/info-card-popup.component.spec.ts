import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardPopupComponent } from './info-card-popup.component';

describe('InfoCardPopupComponent', () => {
  let component: InfoCardPopupComponent;
  let fixture: ComponentFixture<InfoCardPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCardPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCardPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
