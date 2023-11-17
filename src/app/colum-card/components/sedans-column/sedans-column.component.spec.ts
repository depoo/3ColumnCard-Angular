import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedansColumnComponent } from './sedans-column.component';

describe('SedansColumnComponent', () => {
  let component: SedansColumnComponent;
  let fixture: ComponentFixture<SedansColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SedansColumnComponent]
    });
    fixture = TestBed.createComponent(SedansColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
