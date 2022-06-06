import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth-service";
import {Roles} from "../../models/enums/Roles";
import {Router} from "@angular/router";
import {routerUrl} from "../../../environments/router-manger";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  role: string = "";
  tableNum: number = 10;
  ROLES: string[] = ["USER", "ADMIN", "COOK", "WAITER"];

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    if (this.authService.isLoginIn()) {
      this.role = this.authService.getRole();
      //this.doRedirect();
    }
  }

  public login(): void {
    this.authService.saveRole(this.role);
    if (this.role === Roles.USER) {
      this.authService.saveTableNum(this.tableNum);
    }
    this.doRedirect();
  }

  private doRedirect(): void {
    switch (this.role) {
      case Roles.USER:
        this.router.navigate([routerUrl.menu],
          {queryParams: {category: "DESERT"}}).then();
        break;
      case Roles.WAITER :
        this.router.navigate([routerUrl.waiter]);
        break;
      case Roles.COOK:
        this.router.navigate([routerUrl.kitchen]);
        break;
      case Roles.ADMIN:
        this.router.navigate([routerUrl.menu],
          {queryParams: {category: "DESERT"}}).then();
        break;
    }
  }
}
