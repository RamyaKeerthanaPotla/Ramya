import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeadComponent } from "./head/head.component";
import { NavComponent } from "./nav/nav.component";
import { IndexComponent } from "./index/index.component";
import { LoginrComponent } from "./loginr/loginr.component";
import { FooterComponent } from "./footer/footer.component";
import { UserComponent } from "./user/user.component";
import { ExercisesComponent } from "./exercises/exercises.component";
import { Profile } from "./models/Profile";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginService } from "./models/login.service";
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    NavComponent,
    IndexComponent,
    LoginrComponent,
    FooterComponent,
    UserComponent,
    ExercisesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "home", component: IndexComponent },
      { path: "login", component: LoginrComponent },
      { path: "user", component: UserComponent },
      { path: "exercises", component: ExercisesComponent },
      {path: "about", component:AboutComponent},
      { path: "", pathMatch: "full", redirectTo: "/home" }
    ])
  ],
  providers: [LoginrComponent, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
