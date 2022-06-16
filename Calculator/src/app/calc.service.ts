 import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { FormBuilder,FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class CalcService {
  form!: FormGroup;

  constructor(
    private http:HttpClient
  ) { }
  server_address='http://127.0.0.1:5000'
 send_post_request(data:any)
 {
  return this.http.post(
    this.server_address,JSON.stringify(data))
}
submit()
{
  console.log("submitted")
  console.log(this.form.value);
}
}
