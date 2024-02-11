import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { LoginComponent } from "../../pages/login/login.component";

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "",
    component: LayoutComponent,
  },
];

