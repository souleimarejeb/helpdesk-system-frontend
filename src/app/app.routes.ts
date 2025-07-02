import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { TicketFormComponent } from './features/ticket-form/ticket-form.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ListTicketComponent } from './features/list-ticket/list-ticket.component';
import { ListRequestComponent } from './features/list-request/list-request.component';
import { ContactComponent } from './features/contact/contact.component';
import { ListAppointmentComponent } from './features/list-appointment/list-appointment.component';
import { CalendarComponent } from './shared/calendar/calendar.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'sidebar', component: SidebarComponent },
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'create-ticket', component: TicketFormComponent },
            { path: 'tickets', component: ListTicketComponent },
            { path: 'list-request', component: ListRequestComponent },
            { path: 'contact', component: ContactComponent },
            {path:'calendar',component:CalendarComponent},
            {path:'list-appointment',component:ListAppointmentComponent}
        ]

    }
];
