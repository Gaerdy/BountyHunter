import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandyInfoComponent } from './candy-info.component';

describe('CandyInfoComponent', () => {
  let component: CandyInfoComponent;
  let fixture: ComponentFixture<CandyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
