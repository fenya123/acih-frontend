import { NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { RegistrationComponent } from "./registration.component";
import { DirectiveModule } from "../../../directives/directive.module";
import { RouterLink } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [RegistrationComponent],
  imports: [CommonModule, NgOptimizedImage, DirectiveModule, RouterLink, ReactiveFormsModule],
})
export class RegistrationModule {}
