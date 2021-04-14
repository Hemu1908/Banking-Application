import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { ForgotUserIdComponent } from './forgot-user-id/forgot-user-id.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NetbankingRegistrationComponent } from './netbanking-registration/netbanking-registration.component';
import { AddCredentialComponent } from './add-credential/add-credential.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component'
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { CheckStatusComponent } from './check-status/check-status.component';
import { FundsTransferComponent } from './funds-transfer/funds-transfer.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LogoutComponent } from './logout/logout.component';
import { ImpsFormComponent } from './imps-form/imps-form.component';
import { RtgsFormComponent } from './rtgs-form/rtgs-form.component';
import { NeftFormComponent } from './neft-form/neft-form.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'registerPage', component: NetbankingRegistrationComponent },
  { path: 'loginPage', component: LoginpageComponent },
  { path: 'newAccount', component: CreateAccountComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'forgotUserId', component: ForgotUserIdComponent },
  { path: 'newPasswordPage', component: SetNewPasswordComponent },
  { path: 'checkStatus', component: CheckStatusComponent },
  { path: 'credential',component: AddCredentialComponent },
  { path: 'viewRequest',component: ViewRequestComponent  },
  { path: 'transactionDetail',component:TransactionComponent},
  { path: 'admin', component: AdminPanelComponent },
  { path: 'accDetails', component: AccountDetailsComponent },
  { path: 'accSummary', component: AccountSummaryComponent },
  { path: 'accStatement', component: AccountStatementComponent },
  { path: 'fundsTransfer', component: FundsTransferComponent },
  { path: 'imps', component: ImpsFormComponent},
  { path: 'rtgs', component: RtgsFormComponent},
  { path: 'neft', component: NeftFormComponent},
  { path: 'fundsTransfer', component: FundsTransferComponent,
    children:[
      { path: 'imps', component: ImpsFormComponent},
      { path: 'rtgs', component: RtgsFormComponent},
      { path: 'neft', component: NeftFormComponent}
    ]},
  { path: 'changePassword', component:ChangePasswordComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'userDashboard', component: UserDashboardComponent, 
    children: [
      { path: 'accStatement', component: AccountStatementComponent },
      { path: 'accDetails', component: AccountDetailsComponent },
      { path: 'accSummary', component: AccountSummaryComponent },
      { path: 'fundsTransfer', component: FundsTransferComponent},
      { path: 'changePassword', component:ChangePasswordComponent},
      { path: 'logout', component: LogoutComponent}
    ]},
  
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
