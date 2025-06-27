import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ListTicketComponent } from './tickets/list-ticket/list-ticket.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent },
    {path:'sidebar',component:SidebarComponent},
    {path:'tickets', component:ListTicketComponent},
    {
        path: '',
        component: LayoutComponent,
        // children: [
        //   { path: '', component: HomeComponent }, // Default child route
        //   { path: 'about', component: AboutComponent },
        //   { path: 'contact', component: ContactComponent },
    }
];
