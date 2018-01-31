import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzdemoIconComponent } from './nzdemo-icon.component';

describe('NzdemoIconComponent', () => {
  let component: NzdemoIconComponent;
  let fixture: ComponentFixture<NzdemoIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzdemoIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzdemoIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
