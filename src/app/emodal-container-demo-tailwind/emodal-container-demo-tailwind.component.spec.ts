import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmodalContainerDemoTailwindComponent } from './emodal-container-demo-tailwind.component';

describe('EmodalContainerDemoTailwindComponent', () => {
  let component: EmodalContainerDemoTailwindComponent;
  let fixture: ComponentFixture<EmodalContainerDemoTailwindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmodalContainerDemoTailwindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmodalContainerDemoTailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
