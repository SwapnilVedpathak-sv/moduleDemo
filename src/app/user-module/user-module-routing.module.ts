import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserModuleComponent } from './user-module.component';

const routes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: '', component: UserModuleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
