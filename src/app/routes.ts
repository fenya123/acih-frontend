import { Routes } from "@angular/router";
import { LayoutComponent } from "./modules/layout/layout.component";
import { LoginComponent } from "./pages/auth/login/login.component";
import { RegistrationComponent } from "./pages/auth/registration/registration.component";

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    // eslint-disable-next-line @typescript-eslint/promise-function-async,@typescript-eslint/prefer-readonly-parameter-types
    loadChildren: () => import("./pages/auth/login/login.module").then(i => i.LoginModule),
  },
  {
    path: "registration",
    component: RegistrationComponent,
    // eslint-disable-next-line @typescript-eslint/promise-function-async,@typescript-eslint/prefer-readonly-parameter-types
    loadChildren: () => import("./pages/auth/registration/registration.module").then(i => i.RegistrationModule),
  },
  {
    path: "",
    component: LayoutComponent,
  },
];
