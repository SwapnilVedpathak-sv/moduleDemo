import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { UserModuleComponent } from './user-module.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { MaterialModule } from './../material-module.module';


@NgModule({
  declarations: [
    UserModuleComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    MaterialModule
  ]
})
export class UserModuleModule { }
