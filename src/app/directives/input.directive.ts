import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: "input[acihInput]",
})
export class InputDirective {
  @HostBinding("class")
  elementClass = "achiInput";
}
