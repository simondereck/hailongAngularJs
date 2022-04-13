import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './component/photos/photos.component';
import { UsersComponent} from "./component/users/users.component";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {RequestService} from "./service/request.service";

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    UsersComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent,UsersComponent,PhotosComponent]
})
export class AppModule { }
