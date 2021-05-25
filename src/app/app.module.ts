import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { UserloginComponent } from "./userlogin/userlogin.component";
import { NewemployeeComponent } from "./newemployee/newemployee.component";

const appRoutes: Routes = [
  // { path: "", redirectTo: "userlogin", pathMatch: "full" },
  {
    path: "",
    component: UserloginComponent,
  },
  {
    path: "add-employee",
    component: NewemployeeComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserloginComponent,
    NewemployeeComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
