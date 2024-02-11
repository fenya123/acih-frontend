import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";

@Component({
  selector: "app-registration",
  styleUrls: ["./registration.component.scss"],
  templateUrl: "./registration.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  public formGroup = new FormGroup(
    {
      email: new FormControl("", [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/u),
      ]),
      pass: new FormGroup(
        {
          mainPass: new FormControl("", { validators: Validators.required, updateOn: "blur" }),
          confirmPass: new FormControl("", { validators: Validators.required, updateOn: "blur" }),
        },
        { validators: this.confirmedValidator("mainPass", "confirmPass") },
      ),
      userName: new FormControl(),
    },
    Validators.required,
  );

  private confirmedValidator(controlName: string, matchingControlName: string): ValidatorFn | null {
    // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
    return (control: Readonly<AbstractControl>) => {
      const mainPass = control.get(controlName);
      const confirmPass = control.get(matchingControlName);
      if (confirmPass?.errors && !(confirmPass.errors["confirmedValidator"] !== null)) {
        return null;
      }
      if (mainPass?.value !== confirmPass?.value) {
        confirmPass?.setErrors({ confirmedValidator: true });
      } else {
        confirmPass?.setErrors(null);
      }
      return null;
    };
  }

  public registry(): void {
    // eslint-disable-next-line no-console
    console.log(this.formGroup);
  }
}
