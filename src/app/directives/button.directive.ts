import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'button[acihButton]',
})
export class ButtonDirective {
  @HostBinding('class')
  public elementClass = 'acihButton acihButton_Accent';

  @Input() disableButton: boolean;

  @HostBinding('attr.disabled')
  get disabledAttr(): string | null {
    return this.disableButton ? '' : null;
  }
}
