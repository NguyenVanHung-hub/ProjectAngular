import { Component, ElementRef, ViewChild, Renderer2, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ShopDataService } from '../shop-data.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Cần đảm bảo styleUrls đúng
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('paragraph') paragraph!: ElementRef;
  @ViewChild('paragraphShop') paragraphShop!: ElementRef;
  receivedDataArray: any[] = [];
  Sum: number = 0;

  private dataSubscription: Subscription = new Subscription();
  private cssChangeSubscription: Subscription = new Subscription();

  constructor(private renderer: Renderer2, private shopDataService: ShopDataService, private router: Router) {}

  changeStyle(): void {
    if (this.paragraph) {
      this.renderer.setStyle(this.paragraph.nativeElement, 'display', 'block');
    }
  }

  test(): void {
    alert('da click');
  }

  changeStyle2(): void {
    if (this.paragraph) {
      this.renderer.setStyle(this.paragraph.nativeElement, 'display', 'none');
    }
  }

  changeStyleShop(): void {
    if (this.paragraphShop) {
      this.renderer.setStyle(this.paragraphShop.nativeElement, 'display', 'inline-block');
    }
  }

  changeStyleShop2(): void {
    if (this.paragraphShop) {
      this.renderer.setStyle(this.paragraphShop.nativeElement, 'display', 'none');
    }
  }

  priceSum(): void {
    this.Sum = this.receivedDataArray.reduce((total, product) => total + (product.price || 0) * (product.quantity || 1), 0);
  }

  removeItem(index: number): void {
    this.receivedDataArray.splice(index, 1);
    this.shopDataService.setDataArray(this.receivedDataArray);
    this.priceSum();
  }

  updateQuantity(index: number): void {
    this.shopDataService.setDataArray(this.receivedDataArray);
    this.priceSum();
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
    this.cssChangeSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.dataSubscription = this.shopDataService.data$.subscribe(data => {
      this.receivedDataArray = data.map(item => ({
        ...item,
        quantity: item.quantity || 1
      }));
      this.priceSum();
      console.log(this.receivedDataArray.length);
    });

    this.cssChangeSubscription = this.shopDataService.cssChange$.subscribe(state => {
      if (state) {
        this.changeStyleShop();
      } else {
        this.changeStyleShop2();
      }
    });
  }

  ngAfterViewInit(): void {
  }


  // cn Tim kiem
  
  search:string='';
  searchXuLy(item: string){
  
   
    this.router.navigate(['/product'], { queryParams: { search: item.search} });
    
  }
}
