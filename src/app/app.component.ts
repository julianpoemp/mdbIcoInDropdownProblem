import {Component, ViewChild} from '@angular/core';
import {MdbDropdownDirective} from 'mdb-angular-ui-kit/dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mdbTest';
  @ViewChild('dropdown') dropdown: MdbDropdownDirective | undefined;

  toggle() {
    console.log(`clicked`);
    if (this.dropdown !== undefined) {
      console.log(this.dropdown);
      this.dropdown.show();
    }
  }
}
