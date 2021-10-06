import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LossTypeComponent } from './lossType.component';

describe('loseTypeComponent', () => {
  let component: LossTypeComponent;
  let fixture: ComponentFixture<LossTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LossTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LossTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
