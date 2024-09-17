import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './shared/mat-module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, PB_DIRECTION } from 'ngx-ui-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Token } from '@angular/compiler';
import { MatCardModule } from '@angular/material/card';
import { MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FullComponent } from './full/full.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { TokenInterceptorInterceptor } from './services/token-interceptor.interceptor';
import { InteriorComponent } from './interior/interior.component';
import { MenuComponent } from './menu/menu.component';


// const ngxUiLoaderConfig: NgxUiLoaderConfig = {
//   text: "Loading...",
//   textColor: "#FFFFFF",
//   textPosition: "center-center",
//   pbColor: "rgb(215, 229, 230)",
//   bgsColor: "rgb(215, 229, 230)",
//   fgsColor: "rgb(215, 229, 230)",
//   fgsType: SPINNER.squareJellyBox,
//   fgsSize: 100,
//   pbDirection: PB_DIRECTION.leftToRight,
//   pbThickness: 5,
//   masterLoaderId: "master",
// }

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    FullComponent,
    BestSellerComponent,
    SignupComponent,
    ForgotPasswordComponent,
    LoginComponent,
    InteriorComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatModule,
    SharedModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    // NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    MatDialogModule,

    
  ],
  providers: [HttpClientModule,{provide:HTTP_INTERCEPTORS, useClass:TokenInterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

