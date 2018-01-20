import { Routes, RouterModule } from '@angular/router';

import { LoginComponent, HomeComponent, AddRecruitComponent } from './components/index';


const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent },// otherwise redirect to home
    { path: '**', redirectTo: '' }
 ];

export const AppRouting = RouterModule.forRoot(appRoutes);