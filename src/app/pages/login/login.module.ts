import { NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./login.component";
import { DirectiveModule } from "../../directives/directive.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, DirectiveModule, NgOptimizedImage, FormsModule, ReactiveFormsModule, HttpClientModule],
})
export class LoginModule {}