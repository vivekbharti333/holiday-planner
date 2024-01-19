import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  //{path:'', redirectTo:'login', pathMatch:'full'},
  //{
  //  path: 'login',
   // loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  //},
  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path:'',
    loadChildren: ()=> import('./pages/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path:'payments',
    loadChildren: ()=> import('./pages/payments/payments.module').then((m) => m.PaymentsModule),
  },


  //{ path: '**', redirectTo:'/login' }, // Handle 404 errors
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
