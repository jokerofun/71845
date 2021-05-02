import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MainComponent } from './pages/main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NewDocumentComponent } from './pages/new-document/new-document.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { CircleComponent } from './shapes/circle/circle.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    MainComponent,
    NewDocumentComponent,
    CircleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, DragDropModule],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
