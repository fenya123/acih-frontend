import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
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
    email: new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/u)]),
    pass: new FormControl("", [Validators.required]),
  });

  private readonly error = new BehaviorSubject<boolean>(false);

  public error$ = this.error.asObservable();

  public constructor(@Inject(AuthService) private readonly loginService: Readonly<AuthService>) {}

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
}
