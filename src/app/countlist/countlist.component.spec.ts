import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountlistComponent } from './countlist.component';

describe('CountlistComponent', () => {
  let component: CountlistComponent;
  let fixture: ComponentFixture<CountlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
