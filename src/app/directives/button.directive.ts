import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "button[acihButton]",
})
export class ButtonDirective {
  @HostBinding("class")
  public elementClass = "acihButton acihButton_Accent";

  @Input() private readonly disableButton: boolean;

  @HostBinding("attr.disabled")
  public get disabledAttr(): string | null {
    return this.disableButton ? "" : null;
  }
}
