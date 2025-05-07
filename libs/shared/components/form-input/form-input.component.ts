import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-input',
  template: `
    <div class="form-group">
      <label>{{ label }}</label>
      <input [type]="type" [(ngModel)]="value" (ngModelChange)="onValueChange($event)" />
    </div>
  `,
  styles: [`
    .form-group {
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
    input {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
    }
  `]
})
export class FormInputComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();

  onValueChange(value: any) {
    this.valueChange.emit(value);
  }
}
