import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListEmployesComponent } from './list-employes/list-employes.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import { AddEmployeComponent } from './addEmploye/addEmploye.component';
import { ModifyEmployeComponent } from './modifyEmploye/modifyEmploye.component';
import { ProfileComponent } from './profile/profile.component';
import { ListMaterialsEmployeComponent } from './list-materials-employe/list-materials-employe.component';
import { AddMaterialComponent } from './addMaterial/addMaterial.component';
import { CreateMaterialComponent } from './createMaterial/createMaterial.component';


export const routes: Routes = [
  {path: "", component: AccueilComponent, canActivate: [AuthGuard]},
  {path: "employes", component: ListEmployesComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: "addEmploye", component: AddEmployeComponent, canActivate: [AuthGuard]},
  {path: "employe/:id/modify", component:  ModifyEmployeComponent, canActivate: [AuthGuard]},
  {path: "profile", component: ProfileComponent, canActivate: [AuthGuard]},
  {path: "employe/:id/materials", component: ListMaterialsEmployeComponent, canActivate: [AuthGuard]},
  {path: "employe/:id/materials/add", component: AddMaterialComponent, canActivate: [AuthGuard]},
  {path: "employe/:id/materials/create", component: CreateMaterialComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule,
            RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
