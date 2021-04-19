import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFilesUploadComponent } from './view-files-upload.component';

describe('ViewFilesUploadComponent', () => {
  let component: ViewFilesUploadComponent;
  let fixture: ComponentFixture<ViewFilesUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFilesUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFilesUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
