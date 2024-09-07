import { Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { NotfoundComponent } from './layout/additions/notfound/notfound.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { RegisterComponent } from './layout/pages/register/register.component';
import { authGuard } from './shared/guard/auth.guard';
import { ForgetPasswordComponent } from './layout/additions/forget-password/forget-password.component';
import { ProductDetailsComponent } from './layout/pages/product-details/product-details.component';
import { CartComponent } from './layout/pages/cart/cart.component';
import { OrderComponent } from './layout/additions/order/order.component';
import { AllOrdersComponent } from './layout/additions/all-orders/all-orders.component';


export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home', canActivate:[authGuard], component:HomeComponent,title:'Home'},
    {path:'cart', canActivate:[authGuard], component:CartComponent,title:'Cart'},
    {path:'order/:cartId', canActivate:[authGuard], component:OrderComponent, title:'Order Data'},
    {path:'allorders', canActivate:[authGuard], component:AllOrdersComponent, title:'All Orders'},
    {path:'productDetails/:id', canActivate:[authGuard], component:ProductDetailsComponent,title:'Product Details'},
    {path:'login', component:LoginComponent,title:'Login'},
    {path:'register', component:RegisterComponent,title:'Register'},
    {path:'forgetPassword', component:ForgetPasswordComponent,title:'Forget Password'},
    {path:'**',component:NotfoundComponent,title:'Not Found'},
];
