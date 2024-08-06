import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule,NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NgbModule,NgbCarouselModule,CommonModule,NzCarouselModule,NgFor],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
  providers: [NgbCarouselConfig]
})
export class BannerComponent {
  slides = [
    { image1: '/assets/img/slider1.jpg' },
    { image: '/assets/img/slider2.jpg' },
    { image: '/assets/img/slider3.jpg' },
    { image: '/assets/img/slider4.jpg' },
  ];

}
