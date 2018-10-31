import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCandyComponent } from './my-candy.component';

describe('MyCandyComponent', () => {
  let component: MyCandyComponent;
  let fixture: ComponentFixture<MyCandyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCandyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCandyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
