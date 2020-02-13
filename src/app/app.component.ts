import { Component } from '@angular/core';

import { PlatformLocation } from '@angular/common'
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Grievance-System';

  constructor(
    location: PlatformLocation,
    router: Router) {
    
  }
  ngOnInit() {
  }

}
