import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/headers/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components//main/main/main.component';
import { NyAccountComponent } from './components/headers/header/ny-account/ny-account.component';
import { ProductsComponent } from './components/headers/header/products/products.component';
import { MyCartComponent } from './components/headers/header/my-cart/my-cart.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { LoginComponent } from './components/main/main/login/login.component';
import { RegisterComponent } from './components/main/main/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from './share/service/user.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { AppProductsComponent } from './components/main/main/app-products/app-products.component';
import { BookService } from './share/service/book.service';
import { ProductPreviewComponent } from './components/main/main/product-preview/product-preview.component';
import { ProductDetailsComponent } from './components/main/main/product-details/product-details.component';
import { CartProductComponent } from './components/main/main/cart-product/cart-product.component';
import { AuthGuard } from './share/auth.guard';

const appRoutes: Routes = [
  {
    path: 'myAccount', component: NyAccountComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'logout', component: LoginComponent }
    ]
  },
  { path: 'products', component: AppProductsComponent },
  { path: 'products/productsDetails/:book', component: ProductDetailsComponent },
  { path: 'myCart', component: MyCartComponent, canActivate: [AuthGuard] },
  { path: '**', component: HomeComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NyAccountComponent,
    ProductsComponent,
    MyCartComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AppProductsComponent,
    ProductPreviewComponent,
    ProductDetailsComponent,
    CartProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [UserService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
