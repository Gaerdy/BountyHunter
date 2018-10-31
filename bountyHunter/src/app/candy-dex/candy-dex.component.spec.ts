import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandyDexComponent } from './candy-dex.component';

describe('CandyDexComponent', () => {
  let component: CandyDexComponent;
  let fixture: ComponentFixture<CandyDexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandyDexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandyDexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
