import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: LayoutComponent,
        // children: [
        //   { path: '', component: HomeComponent }, // Default child route
        //   { path: 'about', component: AboutComponent },
        //   { path: 'contact', component: ContactComponent },
    }
];
