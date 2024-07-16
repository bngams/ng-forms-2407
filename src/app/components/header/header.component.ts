import { Component, inject } from '@angular/core';
import { IconMenuItems } from '../../models/icon-menu-item';
import { AuthService } from '../../modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  iconMenuItems: IconMenuItems  = [
    { path: '/home', icon: 'home', desc: 'Home page'},
    { path: '/dashboard', icon: 'dashboard', desc: 'Dashboard page' },
    { path: '/products', icon: 'store', desc: 'Store page'}
  ];

  // DI without constructor
  readonly authService: AuthService = inject(AuthService);


}
