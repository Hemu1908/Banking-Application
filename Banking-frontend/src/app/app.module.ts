import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { NgOtpInputModule } from  'ng-otp-input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CheckStatusComponent } from './check-status/check-status.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotUserIdComponent } from './forgot-user-id/forgot-user-id.component';
import { FundsTransferComponent } from './funds-transfer/funds-transfer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ImpsFormComponent } from './imps-form/imps-form.component';
import { RtgsFormComponent } from './rtgs-form/rtgs-form.component';
import { NeftFormComponent } from './neft-form/neft-form.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LogoutComponent } from './logout/logout.component';
import { NetbankingRegistrationComponent } from './netbanking-registration/netbanking-registration.component';
import { TransferSuccessComponent } from './transfer-success/transfer-success.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { HomeNavigationComponent } from './home-navigation/home-navigation.component';
import { SessionExpiredComponent } from './session-expired/session-expired.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AddCredentialComponent } from './add-credential/add-credential.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import { DashboardNavigationComponent } from './dashboard-navigation/dashboard-navigation.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { ViewFilesUploadComponent } from './view-files-upload/view-files-upload.component';
import { OtpValidationComponent } from './otp-validation/otp-validation.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminAccountTransactionComponent } from './admin-account-transaction/admin-account-transaction.component';
import Swal from 'sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    AccountDetailsComponent,
    AccountSummaryComponent,
    AddBeneficiaryComponent,
    ChangePasswordComponent,
    CheckStatusComponent,
    CreateAccountComponent,
    ForgotPasswordComponent,
    ForgotUserIdComponent,
    FundsTransferComponent,
    HomepageComponent,
    ImpsFormComponent,
    RtgsFormComponent,
    NeftFormComponent,
    LoginpageComponent,
    LogoutComponent,
    NetbankingRegistrationComponent,
    TransferSuccessComponent,
    UserDashboardComponent,
    WelcomePageComponent,
    HomeNavigationComponent,
    SessionExpiredComponent,
    AdminPanelComponent,
    AddCredentialComponent,
    TransactionComponent,
    ViewRequestComponent,
    DashboardNavigationComponent,
    AccountStatementComponent,
    ContactUsComponent,
    DocumentUploadComponent,
    ViewFilesUploadComponent,
    OtpValidationComponent,
    AdminLoginComponent,
    AdminAccountTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    //NgOtpInputModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
