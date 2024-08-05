import { Component, ElementRef, ViewChild, Renderer2, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { ShopDataService } from '../shop-data.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule,NgClass],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Cần đảm bảo styleUrls đúng
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('paragraph') paragraph!: ElementRef;
  @ViewChild('paragraphShop') paragraphShop!: ElementRef;
  @ViewChild('clickUser') clickUser!: ElementRef;
  receivedDataArray: any[] = [];
  Sum: number = 0;
  

  private dataSubscription: Subscription = new Subscription();
  private cssChangeSubscription: Subscription = new Subscription();
  private authSubscription: Subscription = new Subscription();
  isUserAuthenticated: boolean = false;

  constructor(private renderer: Renderer2, 
    private shopDataService: ShopDataService, private router: Router, private authService: AuthService) {}

  changeStyle(): void {
    if (this.paragraph) {
      this.renderer.setStyle(this.paragraph.nativeElement, 'display', 'block');
    }
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

  // quan ly user dang nhap
  onClickuser(): void {
    if (this.clickUser) {
      this.renderer.setStyle(this.clickUser.nativeElement, 'display', 'block');
    }
  }
  onClickuser2(): void {
    if (this.clickUser) {
      this.renderer.setStyle(this.clickUser.nativeElement, 'display', 'none');
    }
  }
  logout() {
    this.authService.logout();
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

// 

//  cn thanh toan

  pay():void{
    if(this.isUserAuthenticated){
      this.router.navigate(['/Pay'])
    }else{
      alert('ban can dang nhap de thanh toan');
      this.router.navigate(['/SingeIn'])
    }
  }

// 
  priceSum(): void {
    this.Sum = this.receivedDataArray.reduce((total, product) => total + (product.price || 0) * (product.quantity || 1), 0);

    const totalQuantity = this.receivedDataArray.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const cartItems = {
      items: this.receivedDataArray,
      summary: {
        totalQuantity: totalQuantity,
        totalPrice: this.Sum
      }
    }
    console.log('sum:', this.Sum);
    this.shopDataService.changeSum(this.Sum); 
  }
  
  // handelClick
  handelClick(){
    this.pay();
    this.priceSum();
  }

  // xoa san pham khoi shop
  removeItem(index: number): void {
    this.receivedDataArray.splice(index, 1);
    this.shopDataService.setDataArray(this.receivedDataArray);
    
    this.priceSum();
  }
  // cap naht lai so luong san pham trong shop
  updateQuantity(index: number): void {
    this.shopDataService.setDataArray(this.receivedDataArray);
    this.priceSum();
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
    this.cssChangeSubscription.unsubscribe();
    this.authSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.authSubscription = this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isUserAuthenticated = isLoggedIn; // Cập nhật trạng thái đăng nhập
    });
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
    this.changemenu();
  }

  
  ngAfterViewInit(): void {
  }


  // cn Tim kiem
  
  search:string='';
  searchXuLy(item: string){
    this.router.navigate(['/product'], { queryParams: { search: item.search} });
  }

  currenMenuMain: string ='/Admim/Home';
  changemenu(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currenMenuMain = event.urlAfterRedirects; 
      }
    });
    this.currenMenuMain = this.router.url;
  };

}
