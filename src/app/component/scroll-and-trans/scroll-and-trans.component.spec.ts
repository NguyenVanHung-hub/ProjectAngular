import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollAndTransComponent } from './scroll-and-trans.component';

describe('ScrollAndTransComponent', () => {
  let component: ScrollAndTransComponent;
  let fixture: ComponentFixture<ScrollAndTransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollAndTransComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollAndTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
