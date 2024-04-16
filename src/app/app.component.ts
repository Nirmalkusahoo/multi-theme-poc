import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FirstComponent} from "./first/first.component";
import {UsingClassComponent} from "./using-class/using-class.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent, UsingClassComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'multi-theme-poc';
}
