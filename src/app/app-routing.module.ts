import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LossTypeComponent } from './components/lossType/lossType.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationGuard } from './helpers/authenticationGuard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'loseType', component: LossTypeComponent, canActivate: [AuthenticationGuard]},
  {path: '', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
