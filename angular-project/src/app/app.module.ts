import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployesComponent } from './list-employes/list-employes.component';
import { MenuComponent } from './menu/menu.component';

import { TokenInterceptor } from './helpers/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AddEmployeComponent } from './addEmploye/addEmploye.component';
import { ModifyEmployeComponent } from './modifyEmploye/modifyEmploye.component';
import { ProfileComponent } from './profile/profile.component';
import { ListMaterialsEmployeComponent } from './list-materials-employe/list-materials-employe.component';
import { AddMaterialComponent } from './addMaterial/addMaterial.component';
import { CreateMaterialComponent } from './createMaterial/createMaterial.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ListEmployesComponent,
    LoginComponent,
    AddEmployeComponent,
    ModifyEmployeComponent,
    ProfileComponent,
    ListMaterialsEmployeComponent,
    AddMaterialComponent,
    CreateMaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatRadioModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
