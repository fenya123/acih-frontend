import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'button[acihButton]',
})
export class ButtonDirective {
  @HostBinding('class')
  elementClass = 'achiButton achiButton_Accent';

  @Input('DisableButton') isDisabled: boolean;
  @HostBinding('attr.disabled')
  get disabledAttr() {
    return this.isDisabled ? '' : null;
  }
}
