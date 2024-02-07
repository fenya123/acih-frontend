import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModulesModule } from './modules/modules.module';
import { RouterOutlet } from '@angular/router';
import { PagesModule } from './pages/pages.module';

@NgModule({
  bootstrap: [AppComponent],
  imports: [BrowserModule, ModulesModule, PagesModule, RouterOutlet],
  declarations: [AppComponent],
})
export class AppModule {}
