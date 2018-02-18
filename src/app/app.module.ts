import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddRoomComponent } from './room/add-room/add-room.component';
import { EditDeleteRoomComponent } from './room/edit-delete-room/edit-delete-room.component';
import { RoomDetailsGridComponent } from './room/room-details-grid/room-details-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    AddRoomComponent,
    EditDeleteRoomComponent,
    RoomDetailsGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
