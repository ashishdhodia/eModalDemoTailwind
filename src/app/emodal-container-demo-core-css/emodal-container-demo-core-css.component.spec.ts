import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmodalContainerDemoCoreCssComponent } from './emodal-container-demo-core-css.component';

describe('EmodalContainerDemoCoreCssComponent', () => {
  let component: EmodalContainerDemoCoreCssComponent;
  let fixture: ComponentFixture<EmodalContainerDemoCoreCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmodalContainerDemoCoreCssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmodalContainerDemoCoreCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
