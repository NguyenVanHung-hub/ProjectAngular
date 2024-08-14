import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpAdminComponent } from './help-admin.component';

describe('HelpAdminComponent', () => {
  let component: HelpAdminComponent;
  let fixture: ComponentFixture<HelpAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
