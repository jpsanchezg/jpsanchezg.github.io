import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; // <-- add

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule,
    MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() text: string = '';
  @Input() type: 'primary' | 'secondary' | 'secondary-outline' | 'danger' | 'reset' | 'create' | 'success' | 'login' = 'primary';
  @Input() icon: string = '';
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() disabled: boolean = false;
  @Input() selected: boolean = false;
  @Input() mode: 'normal' | 'radio' | 'checkbox' | 'icon' | 'floating' = 'normal';
  @Input() buttonType: 'apply' | 'delete' | 'cancel' = 'apply';
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() onSelectionChange: EventEmitter<void> = new EventEmitter<void>();
  @Input() position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' = 'bottom-right';

  handleClick(): void {
    if (!this.disabled) {
      if (this.mode === 'radio') {
        this.onSelectionChange.emit();
      }
      this.onClick.emit();
    }
  }

  get isIconOnly(): boolean {
    return this.mode === 'icon' && !!this.icon && !this.text;
  }
}
