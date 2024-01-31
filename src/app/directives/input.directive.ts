import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "input[acihInput]",
})
export class InputDirective {
  @HostBinding("class")
  elementClass = "achiInput";

  @HostBinding("class.achiInput_bad")
  @Input()
  isError: boolean = false;
}
