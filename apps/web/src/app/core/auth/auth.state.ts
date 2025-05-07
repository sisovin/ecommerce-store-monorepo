import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthState {
  private authState = new BehaviorSubject<boolean>(this.hasToken());

  private hasToken(): boolean {
    return !!localStorage.getItem('authToken');
  }

  getAuthState() {
    return this.authState.asObservable();
  }

  setAuthState(isAuthenticated: boolean) {
    this.authState.next(isAuthenticated);
  }
}
