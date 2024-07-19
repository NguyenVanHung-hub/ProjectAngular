import { Component,ElementRef,ViewChild,Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // myClick(event: MouseEvent): void {
  //   alert("da click");
  // }
  @ViewChild('paragraph') paragraph!: ElementRef;

  constructor(private renderer: Renderer2) {}

  changeStyle(): void {
    
    this.renderer.setStyle(this.paragraph.nativeElement, 'transform', 'translateX(0)');
    
    
  }
  changeStyle2(): void {
    
    this.renderer.setStyle(this.paragraph.nativeElement, 'transform', 'translateX(470px)');
    
    
  }
}


