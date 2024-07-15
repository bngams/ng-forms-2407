import { Injectable } from "@angular/core";
import { Credentials } from "../models/credentials";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(private router: Router) { }

  postLogin(credentials: Credentials): void {
    // emulate some login
    console.log('do http request for login', credentials);
    // change login status
    this.isLoggedIn = true;
    // redirect
    this.router.navigateByUrl('/dashboard');
  }

}
