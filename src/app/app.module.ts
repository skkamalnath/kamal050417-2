import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { userComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    userComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
