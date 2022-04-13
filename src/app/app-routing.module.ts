import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./component/users/users.component";
import {PhotosComponent} from "./component/photos/photos.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path:"users",component: UsersComponent},
  {path:"photos",component:PhotosComponent},
  // {path:"/",component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
