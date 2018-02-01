import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzdemoBreadcrumbComponent } from './nzdemo-breadcrumb.component';

describe('NzdemoBreadcrumbComponent', () => {
  let component: NzdemoBreadcrumbComponent;
  let fixture: ComponentFixture<NzdemoBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzdemoBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzdemoBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
