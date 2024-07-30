
import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';


@Component({
  selector: 'app-scroll-and-trans',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './scroll-and-trans.component.html',
  styleUrl: './scroll-and-trans.component.css'
})
export class ScrollAndTransComponent {
  constructor(private renderer: Renderer2){};
  @ViewChild('display') display! : ElementRef;
  isTransSettingVisible: boolean = false;
 
  
  // len dau trang
  onScroll() {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  // display transSetting
  changeDisplay(): void{
    this.isTransSettingVisible = !this.isTransSettingVisible;
    this.renderer.setStyle(this.display.nativeElement, 'display', this.isTransSettingVisible ? 'block' : 'none');
  }

  // Da ngon ngu
  
}
