import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonDirective } from "./button.directive";
import { InputDirective } from "./input.directive";

@NgModule({
  declarations: [ButtonDirective, InputDirective],
  imports: [CommonModule],
  exports: [ButtonDirective, InputDirective],
})
export class DirectiveModule {
}
