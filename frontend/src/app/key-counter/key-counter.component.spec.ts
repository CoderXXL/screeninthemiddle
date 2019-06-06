import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyCounterComponent } from './key-counter.component';

describe('KeyCounterComponent', () => {
  let component: KeyCounterComponent;
  let fixture: ComponentFixture<KeyCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
