import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "input[acihInput]",
})
export class InputDirective {
  @HostBinding("class")
  public elementClass = "acihInput";

  @HostBinding("class.acihInput_bad")
  @Input()
  public isError = false;
}
