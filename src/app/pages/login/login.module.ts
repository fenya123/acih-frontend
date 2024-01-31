import { NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { LoginComponent } from "./login.component";
import { AppModule } from "../../app.module";
import { DirectiveModule } from "../../directives/directive.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AppModule,
    DirectiveModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LoginModule {}
