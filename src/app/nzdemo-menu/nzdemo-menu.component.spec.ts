import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzdemoMenuComponent } from './nzdemo-menu.component';

describe('NzdemoMenuComponent', () => {
  let component: NzdemoMenuComponent;
  let fixture: ComponentFixture<NzdemoMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzdemoMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzdemoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
