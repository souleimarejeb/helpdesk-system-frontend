import { Component } from '@angular/core';
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-layout',
  imports: [FooterComponent, NavbarComponent, RouterModule],
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {


}
