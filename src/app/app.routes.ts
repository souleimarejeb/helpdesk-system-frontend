import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { TicketFormComponent } from './features/ticket-form/ticket-form.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'create-Ticket', component: TicketFormComponent },
        ]
        //   { path: '', component: HomeComponent }, // Default child route
        //   { path: 'about', component: AboutComponent },
        //   { path: 'contact', component: ContactComponent },
    },
    { path: 'create-Ticket', component: TicketFormComponent }


];
