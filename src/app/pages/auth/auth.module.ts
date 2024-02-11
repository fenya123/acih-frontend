import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginModule } from "./login/login.module";
import { RegistrationModule } from "./registration/registration.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, LoginModule, RegistrationModule],
})
export class AuthModule {}
