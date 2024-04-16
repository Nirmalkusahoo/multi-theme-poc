import { Component } from '@angular/core';
import {ThemeService} from "./theme-service.service";

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {
  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.defaultTheme();
  }

  defaultTheme() {
    this.themeService.setDefaultTheme();
  }

  theme1() {
    this.themeService.setLightTheme();
  }

  theme2() {
    this.themeService.setDarkTheme();
  }
}
