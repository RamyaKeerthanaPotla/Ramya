import { Injectable } from "@angular/core";
import { Profile } from "./Profile";
import { Http } from "@angular/http";
import { Router } from "@angular/router";

declare var window: any;
declare var FB: any;

@Injectable()
export class SharingService {
  apiRoot: string;
  me: Profile;
  id= "1975646716023882"
  constructor(private http: Http, private router: Router) {
    this.apiRoot = `//${window.location.hostname}:3001`;
    //this.apiRoot = `localhost:4200`;
    window.fbAsyncInit = function() {
      FB.init({
        appId: this.id,
        cookie: false,
        xfbml: true,
        version: "1.0"
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = <HTMLScriptElement>d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  loginFB() {
    FB.login(
      (response: any) => {
        console.log(this.id);
        if (response.authResponse) {
          //console.log(response);
          FB.api("/me?fields=name,email,picture", (response: any) => {
            //console.log(response);
            this.login(
              response.name,
              "password",
              response.id,
              response.picture.data.url
            );
          });
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      },
      { scopes: "email,user_photos,user_posts" }
    );
  }

  login(name: string, password: string, fbid?: string, picture?: string) {
    ME = new Profile(name, fbid, picture, this.http);
    this.me = ME;
    this.http
      .post(this.apiRoot + "/players", {
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
  }
}
export var ME: Profile;
