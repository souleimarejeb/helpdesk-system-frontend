import { Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
   isDropdownOpen=false;

 ngOnInit(): void {
    console.log(' vaueue isDropdownOpen',this.isDropdownOpen); 
 }

 toggleDropdown() {

    this.isDropdownOpen = !this.isDropdownOpen;
      console.log('isDropdownOpen valuee ::: ',this.isDropdownOpen); 
    
  }
  }

