import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzdemoDropdownComponent } from './nzdemo-dropdown.component';

describe('NzdemoDropdownComponent', () => {
  let component: NzdemoDropdownComponent;
  let fixture: ComponentFixture<NzdemoDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzdemoDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzdemoDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
