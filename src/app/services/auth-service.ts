import {Injectable} from '@angular/core';
import {Roles} from "../models/enums/Roles";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private ROLE_KEY = "ROLE";
  private TABLE_NUM_KEY = "TABLE_NUM";

  constructor() {
  }

  public saveRole(role: string): void {
    localStorage.setItem(this.ROLE_KEY, role);
  }

  public getRole(): string {
    return localStorage.getItem(this.ROLE_KEY) || "";
  }

  public saveTableNum(tableNum: number): void {
    localStorage.setItem(this.TABLE_NUM_KEY, tableNum.toString());
  }

  public isUser(): boolean {
    return localStorage.getItem(this.ROLE_KEY) === Roles.USER;
  }

  public isAmin(): boolean {
    return localStorage.getItem(this.ROLE_KEY) === Roles.ADMIN;
  }

  public isCook(): boolean {
    return localStorage.getItem(this.ROLE_KEY) === Roles.COOK;
  }

  public isWaiter(): boolean {
    return localStorage.getItem(this.ROLE_KEY) === Roles.WAITER;
  }

  public isLoginIn(): boolean {
    return !!localStorage.getItem(this.ROLE_KEY)
  }

}
