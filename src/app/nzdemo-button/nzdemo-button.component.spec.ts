import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzdemoButtonComponent } from './nzdemo-button.component';

describe('NzdemoButtonComponent', () => {
  let component: NzdemoButtonComponent;
  let fixture: ComponentFixture<NzdemoButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzdemoButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzdemoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
