import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-captcha',
  templateUrl: './get-captcha.component.html',
  styleUrls: ['./get-captcha.component.scss']
})
export class GetCaptchaComponent {
  stage = 0;
  pw = '';
  captcha1 = '';
  captcha2 = '';
  c01 = [];
  c02 = [];
  captchaImg1: string = '';
  captchaImg2: string = '';
  ok122000 = false;
  ok122500 = false;
  isLoading = false;
  url = 'https://1586863340063318.cn-zhangjiakou.fc.aliyuncs.com/2016-08-15/proxy/ly/update-sid/';
  // url = 'http://localhost:8000/2016-08-15/proxy/ly/update-sid/';

  constructor(private http: HttpClient) { }
  restart() {
    this.stage = 0;
    this.captcha1 = '';
    this.captcha2 = '';
  }

  onSubmitPW() {
    // alert(this.pw);
    this.isLoading = true;
    this.http.post(this.url, {
      pw: this.pw
    }).subscribe(res => {
      console.log(res);
      this.stage = 1;
      this.isLoading = false;
      // console.log(res);
      this.captchaImg1 = 'data:image/jpeg;base64,' + (res as any)[0].data;
      this.captchaImg2 = 'data:image/jpeg;base64,' + (res as any)[1].data;
      this.c01 = (res as any)[0].c0;
      this.c02 = (res as any)[1].c0;
      console.log('c01', JSON.stringify(this.c01))
    })
  }

  onSubmitCaptcha() {
    this.isLoading = true;
    this.http.post(this.url, {
      captcha1: this.captcha1,
      captcha2: this.captcha2,
      c01: this.c01,
      c02: this.c02
    }).subscribe(res => {
      this.stage = 2;
      this.isLoading = false;
      console.log(res);
      this.ok122000 = JSON.parse((res as any)[0].data);
      this.ok122500 = JSON.parse((res as any)[1].data);
    })
  }

}
