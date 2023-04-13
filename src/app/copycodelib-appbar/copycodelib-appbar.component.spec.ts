import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopycodelibAppbarComponent } from './copycodelib-appbar.component';

describe('CopycodelibAppbarComponent', () => {
  let component: CopycodelibAppbarComponent;
  let fixture: ComponentFixture<CopycodelibAppbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopycodelibAppbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopycodelibAppbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
