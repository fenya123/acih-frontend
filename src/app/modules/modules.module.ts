import { NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { LayoutComponent } from "./layout/layout.component";
import { RouterModule } from "@angular/router";
import { routes } from "../routes";

@NgModule({
  declarations: [TopBarComponent, LayoutComponent],
  imports: [CommonModule, RouterModule.forRoot(routes), NgOptimizedImage],
  exports: [TopBarComponent],
})
export class ModulesModule {}
