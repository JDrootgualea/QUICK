import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './feature/login/login.component';
import { AdminPageComponent } from './feature/pages/admin-page/admin-page.component';
import { CordiantorPageComponent } from './feature/pages/cordiantor-page/cordiantor-page.component';


const routes: Routes = [
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'administrador',  component: AdminPageComponent },
  { path: 'coordinador',  component: CordiantorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
