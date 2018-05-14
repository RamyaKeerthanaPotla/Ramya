import { Injectable } from "@angular/core";
import { Profile } from "./Profile";
import { Http } from "@angular/http";
import { Router } from "@angular/router";


@Injectable()
export class LoginService {
  apiRoot: string;
  me: Profile;
  token:string;
  pic: string;

  constructor(private http: Http, private router: Router) {
    this.apiRoot = `//${window.location.hostname}:4200`;
    //this.apiRoot = `localhost:4200`;
  }

  login(name: string, password: string, fbid?: string, picture?: string) {
    ME = new Profile(name, fbid, picture, this.http);
    this.me = ME;

    this.http
      .post(this.apiRoot + "/user/newProf", {
        ME
      })
      .subscribe(
        data => {
          this.me = data.json();
          console.log(data);
        },
        err => {
          console.log(err);
        },
        () => {}
      );
      this.router.navigate(['/user']);

      }

  oAuthLogin(name: string, password: string, token: string, picture?: string){
    ME = new Profile(name, token, picture, this.http);
    this.me = ME;
    this.http
      .post(this.apiRoot + "/user/newProf", {
        ME
      })
      .subscribe(
        data => {
          this.me = data.json();
          console.log(data);
        },
        err => {
          console.log(err);
        },
        () => {}
      );
      this.router.navigate(['/user']);
    }

}
export var ME: Profile;
