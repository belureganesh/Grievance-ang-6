import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'src/app/login/home.component';
import { RegistrationComponent } from 'src/app/login/registration.component';
import { LoginComponent } from 'src/app/login/login.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,
    children: [{ path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, data: {animation: 'LoginPage'}  },
    { path: 'register', component: RegistrationComponent, data: {animation: 'RegistrationPage'}  }
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
