import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private readonly loginService: LoginService) {}

  formGroup = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required,
      this.forbiddenNameValidator(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
    ]),
    pass: new FormControl('', [Validators.required]),
  });
  error = new BehaviorSubject<boolean>(false);

  submit() {
    this.error.next(false);
    this.loginService
      .login(<string>this.formGroup.controls.email.value, <string>this.formGroup.controls.pass.value)
      .pipe(
        catchError((e) => {
          this.error.next(true);
          throw e;
        }),
      )
      .subscribe();
  }

  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? null : { email: control.value };
    };
  }
}
