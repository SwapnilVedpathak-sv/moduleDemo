import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'user', loadChildren: () => import('./user-module/user-module.module').then(m => m.UserModuleModule) },
  { path: 'admin', loadChildren: () => import('./admin-module/admin-module.module').then(m => m.AdminModuleModule) },
  { path: '', loadChildren: () => import('./common-module/common-module.module').then(m => m.CommonModuleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
