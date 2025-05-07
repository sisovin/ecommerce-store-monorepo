import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button [type]="type" [disabled]="disabled">{{ label }}</button>
  `,
  styles: [`
    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
    button:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  `]
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
}
