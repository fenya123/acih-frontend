import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  formGroup = new FormGroup({
    email: new FormControl("", [Validators.email]),
    pass: new FormControl("", [Validators.required]),
  });

  submit() {}
}
