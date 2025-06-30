import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { TicketFormComponent } from './features/ticket-form/ticket-form.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ListTicketComponent } from './features/list-ticket/list-ticket.component';
import { ListRequestComponent } from './features/list-request/list-request.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'sidebar', component: SidebarComponent },
    // { path: 'tickets', component: ListTicketComponent },
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'create-Ticket', component: TicketFormComponent },
            { path: 'tickets', component: ListTicketComponent },
            {path: 'list-request', component:ListRequestComponent},
            {path: 'contact', component:ContactComponent}
        ]
        
    }
];
