import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul class="nav nav-pills nav-justified">
      <li class="col-md-5"><a routerLink="/">Home</a></li>
       <li class="col-md-5 col-offset-md-1"><a routerLink="/about">About</a></li>
    </ul>
    <hr />
    <router-outlet></router-outlet>
    `,
})
export class AppComponent  { 
  
}
