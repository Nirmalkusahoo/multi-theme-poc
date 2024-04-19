import {Component, Renderer2} from '@angular/core';
import {environment} from "../../environments/environment";
import {CommonModule} from "@angular/common";
import {MatSlideToggleChange, MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-using-class',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
  ],
  templateUrl: './using-class.component.html',
  styleUrl: './using-class.component.scss'
})
export class UsingClassComponent {
  public environment = environment;

  constructor(private renderer2: Renderer2,) {
  }

  public onFirstThemeChange(changeValue: MatSlideToggleChange): void {
    if (changeValue.checked) {
      this.renderer2.addClass(document.body, 'first-theme');
    } else {
      this.renderer2.removeClass(document.body, 'first-theme')
    }
  }

  public onSecondThemeChange(changeValue: MatSlideToggleChange): void {
    if (changeValue.checked) {
      this.renderer2.addClass(document.body, 'second-theme');
    } else {
      this.renderer2.removeClass(document.body, 'second-theme')
    }
  }
}
