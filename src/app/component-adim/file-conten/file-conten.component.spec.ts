import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileContenComponent } from './file-conten.component';

describe('FileContenComponent', () => {
  let component: FileContenComponent;
  let fixture: ComponentFixture<FileContenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileContenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileContenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
