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


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'registerPage', component: NetbankingRegistrationComponent},
  {path: 'loginPage', component: LoginpageComponent},
  {path: 'newAccount', component: CreateAccountComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  {path: 'forgotUserId', component: ForgotUserIdComponent},
  {path: 'newPasswordPage', component: SetNewPasswordComponent},
  { path: 'credential',component: AddCredentialComponent },
  { path: 'viewRequest',component: ViewRequestComponent  },
  { path: 'transactionDetail',component:TransactionComponent},
  { path: 'admin', component: AdminPanelComponent }

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
