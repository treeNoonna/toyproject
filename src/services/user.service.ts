import { Injectable } from '@angular/core';
import { 유저 } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: 유저 | undefined;

  registerUser(id: string, password: string, address?: string) {
    this.user = {
      id,
      password,
      address
    }
  };

  setUser(id: string) {
    if(this.user?.id === id) {
      localStorage.setItem('user', JSON.stringify(this.user));
    }
  }

  isLoggedin(): boolean {
    const user = localStorage.getItem('user');
    const userObj = user ? JSON.parse(user) as 유저 : undefined;

    return userObj?.id ? true: false;
  }

  logout() {
    this.user = undefined;
  }
}
