import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "input[acihInput]",
})
export class InputDirective {
  @HostBinding("class")
  elementClass = "acihInput";

  @HostBinding("class.acihInput_bad")
  @Input()
  isError = false;
}
