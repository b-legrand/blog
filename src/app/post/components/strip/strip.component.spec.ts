import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripComponent } from './strip.component';
import { CaseComponent } from '../case/case.component';
import { MockComponent } from 'ng-mocks';
import { stripFactory } from 'src/app/core/__mocks__/data';
import { Strip } from '../../models';

describe('StripComponent', () => {
  let component: StripComponent;
  let fixture: ComponentFixture<StripComponent>;
  const stripInput: Strip = stripFactory();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StripComponent, MockComponent(CaseComponent)],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
