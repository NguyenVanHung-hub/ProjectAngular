import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpContenComponent } from './help-conten.component';

describe('HelpContenComponent', () => {
  let component: HelpContenComponent;
  let fixture: ComponentFixture<HelpContenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpContenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpContenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
