import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { LoginService } from "./login.service";
import { catchError } from "rxjs/operators";
import { BehaviorSubject, of } from "rxjs";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  public formGroup = new FormGroup({
    email: new FormControl("", [
      Validators.required,
      this.forbiddenNameValidator(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gmu),
    ]),
    pass: new FormControl("", [Validators.required]),
  });

  private readonly error = new BehaviorSubject<boolean>(false);

  public error$ = this.error.asObservable();

  public constructor(@Inject(LoginService) private readonly loginService: Readonly<LoginService>) {}

  public submit(): void {
    this.error.next(false);
    this.loginService
      .login(this.formGroup.controls.email.value ?? "", this.formGroup.controls.pass.value ?? "")
      .pipe(
        catchError(err => {
          this.error.next(true);
          return of(err);
        }),
      )
      .subscribe();
  }

  private forbiddenNameValidator(nameRe: Readonly<RegExp>): ValidatorFn {
    // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
    return (control: Readonly<AbstractControl<string>>): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? null : { email: control.value };
    };
  }
}
