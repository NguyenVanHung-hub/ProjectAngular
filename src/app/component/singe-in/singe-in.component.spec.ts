import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingeInComponent } from './singe-in.component';

describe('SingeInComponent', () => {
  let component: SingeInComponent;
  let fixture: ComponentFixture<SingeInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingeInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingeInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
