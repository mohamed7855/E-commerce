import { Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { NotfoundComponent } from './layout/additions/notfound/notfound.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { RegisterComponent } from './layout/pages/register/register.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent,title:'Home'},
    {path:'login',component:LoginComponent,title:'Login'},
    {path:'register',component:RegisterComponent,title:'Register'},
    {path:'**',component:NotfoundComponent,title:'Not Found'},
];
