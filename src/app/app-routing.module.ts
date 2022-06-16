import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'registration', component: RegistrationPageComponent },
  { path: 'product-page/:id', component: ProductPageComponent },
  { path: 'delete-book', component: DeleteBookComponent },
  { path: 'profile/:id', component: ProfilePageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
