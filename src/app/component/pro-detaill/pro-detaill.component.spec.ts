import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProDetaillComponent } from './pro-detaill.component';

describe('ProductDetailComponent', () => {
  let component: ProDetaillComponent;
  let fixture: ComponentFixture<ProDetaillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProDetaillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProDetaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
