import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvButtonComponent } from './csv-button.component';

describe('CsvButtonComponent', () => {
  let component: CsvButtonComponent;
  let fixture: ComponentFixture<CsvButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsvButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsvButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
