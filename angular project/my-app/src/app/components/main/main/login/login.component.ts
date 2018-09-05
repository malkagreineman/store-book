
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn } from '@angular/forms';
import { UserService } from '../../../../share/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {


  formGroup: FormGroup;
  obj: typeof Object = Object;
  currentList = [];
  constructor(private userService: UserService) {
    let formGroupConfig = {
      userName: new FormControl("", this.createValidatorArr("userName", 2, 15, /^[a-zA-Z]*$/)),
      userPassword: new FormControl("", this.createValidatorArr("userPassword", 5, 10))
    };
    this.formGroup = new FormGroup(formGroupConfig);
  }
  get f() { return this.formGroup.controls; }

  submitLogin() {
    this.userService.login(this.formGroup.value);
    //this.userService.subject.next(localStorage.getItem('currentUser'));
  }

  createValidatorArr(cntName: string, min: number, max: number, rjx?: RegExp): Array<ValidatorFn> {
    return [
      f => !f.value ? { "val": `${cntName} is required` } : null,
      f => f.value && f.value.length > max ? { "val": `${cntName} is max ${max} chars` } : null,
      f => f.value && f.value.length < min ? { "val": `${cntName} is min ${min} chars` } : null,
      f => f.value && !<String>f.value.match(rjx) ? { "val": `${cntName} is has to be with english letters` } : null
    ];
  }
}
