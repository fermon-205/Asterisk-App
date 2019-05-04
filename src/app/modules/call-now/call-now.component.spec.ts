import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallNowComponent } from './call-now.component';

describe('CallNowComponent', () => {
  let component: CallNowComponent;
  let fixture: ComponentFixture<CallNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
