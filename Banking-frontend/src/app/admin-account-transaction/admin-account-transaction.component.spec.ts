import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccountTransactionComponent } from './admin-account-transaction.component';

describe('AdminAccountTransactionComponent', () => {
  let component: AdminAccountTransactionComponent;
  let fixture: ComponentFixture<AdminAccountTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAccountTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccountTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
