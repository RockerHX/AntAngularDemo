import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzdemoLayoutComponent } from './nzdemo-layout.component';

describe('NzdemoLayoutComponent', () => {
  let component: NzdemoLayoutComponent;
  let fixture: ComponentFixture<NzdemoLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzdemoLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzdemoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
