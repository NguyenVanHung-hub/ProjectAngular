import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProAdminContenComponent } from './pro-admin-conten.component';

describe('ProAdminContenComponent', () => {
  let component: ProAdminContenComponent;
  let fixture: ComponentFixture<ProAdminContenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProAdminContenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProAdminContenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
