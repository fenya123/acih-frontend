import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModulesModule } from './modules/modules.module';
import { RouterOutlet } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CredentialsInterceptor } from './intercepter/credentials.interceptor';

@NgModule({
  bootstrap: [AppComponent],
  imports: [BrowserModule, ModulesModule, PagesModule, RouterOutlet],
  declarations: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CredentialsInterceptor,
      multi: true,
    },
  ],
})
export class AppModule {}
