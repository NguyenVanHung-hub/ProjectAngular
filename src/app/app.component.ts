import { Component, importProvidersFrom } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./page/home/home.component";
import { HeaderComponent } from "./component/header/header.component";
import { FooterComponent } from "./component/footer/footer.component";
import { HttpClientModule } from '@angular/common/http';
import { ScrollAndTransComponent } from "./component/scroll-and-trans/scroll-and-trans.component";
import { BoxHomeComponent } from "./component/box-home/box-home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent, FooterComponent, ScrollAndTransComponent, BoxHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectAngular';
}
