import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopycodelibActionsbarComponent } from './copycodelib-actionsbar.component';

describe('CopycodelibActionsbarComponent', () => {
  let component: CopycodelibActionsbarComponent;
  let fixture: ComponentFixture<CopycodelibActionsbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopycodelibActionsbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopycodelibActionsbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
