import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { ExampleMaterialModule } from './material-module';

import { AppComponent } from './app.component';
import { GithubUserComponent } from './github-user/github-user.component';

import { GithubApiService } from './github-api.service';
import { HomeComponent } from './home/home.component';
import { RepositorieComponent } from './repositorie/repositorie.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubUserComponent,
    HomeComponent,
    RepositorieComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    ExampleMaterialModule,
    AppRoutingModule
  ],
  providers: [GithubApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
