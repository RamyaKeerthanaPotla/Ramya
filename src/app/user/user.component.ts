import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { Router } from "@angular/router";
import { LoginService, ME } from "../models/login.service";
import { Profile } from "../models/Profile";
import { Exercise } from "../models/Exercise";
declare const FB: any;
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {

  ME = ME;

  constructor(
      private http: Http,
      private router: Router,
      private loginService: LoginService
    ) {
      }

  ngOnInit() {

    }


  update() {

  }

  logout() {

    this.router.navigate(["/login"]);
  }

  edit(day:string){
    ME.modDat = day;
    this.router.navigate(["/exercises"]);
  }


}
