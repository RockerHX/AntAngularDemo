import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzdemoGridComponent } from './nzdemo-grid.component';

describe('NzdemoGridComponent', () => {
  let component: NzdemoGridComponent;
  let fixture: ComponentFixture<NzdemoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzdemoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzdemoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
