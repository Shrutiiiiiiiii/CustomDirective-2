import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomStyleDirective } from './custom-style.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomStyleDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
