import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginModule } from "./login/login.module";

@NgModule({
  imports: [CommonModule, LoginModule],
})
export class PagesModule {
}

