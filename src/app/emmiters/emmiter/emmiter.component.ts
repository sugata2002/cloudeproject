import { Component, Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-emmiter',
  templateUrl: './emmiter.component.html',
  styleUrls: ['./emmiter.component.scss']
})
export class EmmiterComponent {
  isAuthenticated: boolean = false;

  setAuthenticationStatus(status: boolean) {
    this.isAuthenticated = status;
  }

  getAuthenticationStatus() {
    return this.isAuthenticated;
  }
}
