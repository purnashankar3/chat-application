import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//routing 
import{RouterModule,Routes} from '@angular/router';
import { ChatModule } from './chat/chat.module';
import{UserModule} from './user/user.module';
import { LoginComponent } from './user/login/login.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{AnimationEvent} from '@angular/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    ChatModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
    {path:'login',component:LoginComponent,pathMatch:'full'},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'*',component:LoginComponent},
    {path:'**',component:LoginComponent}
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
