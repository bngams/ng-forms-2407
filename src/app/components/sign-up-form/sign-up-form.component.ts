import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss'
})
export class SignUpFormComponent {
  @Input() simpleMode: boolean | null = false;
}
