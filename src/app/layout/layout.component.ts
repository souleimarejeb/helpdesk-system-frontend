import { Component } from '@angular/core';
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-layout',
  imports: [FooterComponent, NavbarComponent],
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
