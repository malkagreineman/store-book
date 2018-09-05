import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { UserService } from '../../../../share/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService: UserService) {
    let formGroupConfig = {
      userName: new FormControl("",this.createValidatorArr("userName", 2, 15,/^[a-zA-Z]*$/)),
      userPassword: new FormControl("", this.createValidatorArr("userPassword", 5, 10)),
      firstName: new FormControl("", this.createValidatorArr("firstName", 2, 15,/^[a-zA-Z]*$/)),
      lastName: new FormControl("", this.createValidatorArr("lastName", 2, 15,/^[a-zA-Z]*$/))
    };
    this.formGroup = new FormGroup(formGroupConfig);
  }

  formGroup: FormGroup;
  obj: typeof Object = Object;
    get f() { return this.formGroup.controls; }

  submitLogin() {
    this.userService.register(JSON.parse(JSON.stringify(this.formGroup.value)))
  }

  createValidatorArr(cntName: string, min: number, max: number,rjx?:RegExp): Array<ValidatorFn> {
    return [
      f => !f.value ? { "val": `${cntName} is required` } : null,
      f => f.value && f.value.length > max ? { "val": `${cntName} is max ${max} chars` } : null,
      f => f.value && f.value.length < min ? { "val": `${cntName} is min ${min} chars` } : null,
      f => f.value && !<String>f.value.match(rjx)? { "val": `${cntName} is has to be with english letters` } : null
    ];
  }

}
