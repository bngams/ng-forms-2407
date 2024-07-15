import { Component, inject } from '@angular/core';
import { IconMenuItems } from '../../models/icon-menu-item';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  iconMenuItems: IconMenuItems  = [
    { path: '/home', icon: 'home', desc: 'Home page'},
    { path: '/dashboard', icon: 'dashboard', desc: 'Dashboard page'},
    { path: '/login', icon: 'account_circle', desc: 'Login page'}
  ];

  // DI without constructor
  authService: AuthService = inject(AuthService);

  
}
