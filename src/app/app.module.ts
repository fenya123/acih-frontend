import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ModulesModule } from "./modules/modules.module";
import { RouterOutlet } from "@angular/router";

@NgModule({
  bootstrap: [AppComponent],
  imports: [BrowserModule, ModulesModule, RouterOutlet],
  declarations: [AppComponent],
})
export class AppModule {}
