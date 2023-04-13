import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopycodelibComponent } from './copycodelib.component';

describe('CopycodelibComponent', () => {
  let component: CopycodelibComponent;
  let fixture: ComponentFixture<CopycodelibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopycodelibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopycodelibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
