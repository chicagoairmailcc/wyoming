import { Component, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterContentChecked {
  name = 'Angular';
  ngAfterContentChecked() {
    console.log(
      this
    );
  }
}
