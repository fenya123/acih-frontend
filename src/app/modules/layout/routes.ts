import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";

export const routes: Routes = [
  { path: ":id", component: LayoutComponent },
  { path: "", component: LayoutComponent },
];
