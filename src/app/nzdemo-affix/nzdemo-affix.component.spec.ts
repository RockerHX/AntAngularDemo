import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzdemoAffixComponent } from './nzdemo-affix.component';

describe('NzdemoAffixComponent', () => {
  let component: NzdemoAffixComponent;
  let fixture: ComponentFixture<NzdemoAffixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzdemoAffixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzdemoAffixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
