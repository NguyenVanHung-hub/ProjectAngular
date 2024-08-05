import { Component, ElementRef, HostListener, Renderer2, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-header-admin',
  standalone: true,
  imports: [],
  templateUrl: './header-admin.component.html',
  styleUrl: './header-admin.component.css'
})
export class HeaderAdminComponent {
  @ViewChild('onClickMenuAd', {static:true})onClickMenuAd!:ElementRef;
  constructor (private renderer: Renderer2){};

  onClick():void{
    if(this.onClickMenuAd){
      this.renderer.setStyle(this.onClickMenuAd.nativeElement, 'display', 'block');
    }
  }
  onClickNone():void{
    if(this.onClickMenuAd){
      this.renderer.setStyle(this.onClickMenuAd.nativeElement, 'display', 'none');
    }
  }
 
  logout() {
    localStorage.removeItem('token');
    window.location.href = '/';
  };
}