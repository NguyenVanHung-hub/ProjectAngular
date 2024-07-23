import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule,NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NgbModule,NgbCarouselModule,CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
  providers: [NgbCarouselConfig]
})
export class BannerComponent {
  

}
