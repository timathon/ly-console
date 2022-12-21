import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetCaptchaRoutingModule } from './get-captcha-routing.module';
import { GetCaptchaComponent } from './get-captcha.component';


@NgModule({
  declarations: [
    GetCaptchaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    GetCaptchaRoutingModule
  ]
})
export class GetCaptchaModule { }
