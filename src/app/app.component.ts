import {Component, Renderer2} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FirstComponent} from "./first/first.component";
import {UsingClassComponent} from "./using-class/using-class.component";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent, UsingClassComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'multi-theme-poc';
  constructor(private renderer2: Renderer2,) {
    this.checkForTheme();
  }

  private checkForTheme(): void {
    if (environment.showTheme) {
      const head = document.head;
      const link = this.renderer2.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'first-theme.css';
      this.renderer2.appendChild(head, link);
    }
  }
}
