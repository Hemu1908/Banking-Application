import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCredentialComponent } from './add-credential.component';

describe('AddCredentialComponent', () => {
  let component: AddCredentialComponent;
  let fixture: ComponentFixture<AddCredentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCredentialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCredentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
