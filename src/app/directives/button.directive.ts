import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: "button[acihButton]",
})
export class ButtonDirective {
  @HostBinding("class")
  elementClass = "achiButton achiButton_Accent";
}
