import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduceBannerComponent } from './introduce-banner.component';

describe('IntroduceBannerComponent', () => {
  let component: IntroduceBannerComponent;
  let fixture: ComponentFixture<IntroduceBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroduceBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroduceBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
