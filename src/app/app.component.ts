import { Component, TemplateRef, ViewChild } from '@angular/core';
import { VERSION } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('heavyTemplate') heavyTemplate: TemplateRef<any>;
  name = 'Angular';
  version = VERSION;

  heavyComputation(): void {
    console.log('some computation');
  }
}
