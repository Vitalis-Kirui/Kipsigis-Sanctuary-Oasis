import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommondationsComponent } from './accommondations.component';

describe('AccommondationsComponent', () => {
  let component: AccommondationsComponent;
  let fixture: ComponentFixture<AccommondationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccommondationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommondationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
