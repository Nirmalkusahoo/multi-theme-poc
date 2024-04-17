import {Component, Renderer2} from '@angular/core';
import {environment} from "../../environments/environment";
import {CommonModule, NgIf} from "@angular/common";
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
  public isDigital:boolean;
  public isBAH:boolean;
  constructor(private renderer2: Renderer2,) {
  }

  public onDigitalChange(changeValue:MatSlideToggleChange): void {
    if (changeValue.checked) {
      this.renderer2.addClass(document.body, 'digital-theme');
    } else {
      this.renderer2.removeClass(document.body, 'digital-theme')
    }
  }

  public onBAHChange(changeValue:MatSlideToggleChange): void {
    if (changeValue.checked) {
      this.renderer2.addClass(document.body, 'bah-theme');
    } else {
      this.renderer2.removeClass(document.body, 'bah-theme')
    }
  }
  public changeTheme(changeValue: boolean): void {
    if (changeValue) {
      this.renderer2.addClass(document.body, 'digital-theme');
    } else {
      this.renderer2.removeClass(document.body, 'digital-theme')
    }

    // this.renderer2.addClass(document.body, 'black_theme');
    /* this.renderer2.setStyle(
       this.el.nativeElement.ownerDocument.body,
       '--clr_light_text',
       'red',
     );
     // this.renderer2.setStyle(document.body, '$clr-light-text', '#0057D2');*/
  }
}
