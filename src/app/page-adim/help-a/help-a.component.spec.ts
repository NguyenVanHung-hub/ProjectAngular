import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpAComponent } from './help-a.component';

describe('HelpAComponent', () => {
  let component: HelpAComponent;
  let fixture: ComponentFixture<HelpAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
