import { Component, Input, TemplateRef } from "@angular/core";

@Component({
  selector: "hello",
  templateUrl: './hello.component.html',
  styles: []
})
export class HelloComponent {
  @Input() template: TemplateRef<any>;

  items = [1,2,3,4,5];
}
