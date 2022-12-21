import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetCaptchaComponent } from './get-captcha.component';

const routes: Routes = [{ path: '', component: GetCaptchaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetCaptchaRoutingModule { }
