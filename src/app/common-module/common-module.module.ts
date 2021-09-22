import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonModuleRoutingModule } from './common-module-routing.module';
import { CommonModuleComponent } from './common-module.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { MaterialModule } from './../material-module.module'


@NgModule({
  declarations: [
    CommonModuleComponent,
    SplashScreenComponent
  ],
  imports: [
    CommonModule,
    CommonModuleRoutingModule,
    MaterialModule
  ]
})
export class CommonModuleModule { }
