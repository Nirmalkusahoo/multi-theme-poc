import {Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-using-class',
  standalone: true,
  imports: [],
  templateUrl: './using-class.component.html',
  styleUrl: './using-class.component.scss'
})
export class UsingClassComponent {
  constructor(private renderer2: Renderer2,) {
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
