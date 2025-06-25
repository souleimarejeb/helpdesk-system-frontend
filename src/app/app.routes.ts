import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ListTicketComponent } from './tickets/list-ticket/list-ticket.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {path:'sidebar',component:SidebarComponent},
    {path:'tickets',
        component:ListTicketComponent
    },
];
