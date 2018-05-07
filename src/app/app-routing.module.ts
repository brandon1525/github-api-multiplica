import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GithubUserComponent } from './github-user/github-user.component';
import { RepositorieComponent } from './repositorie/repositorie.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users/:username/repos', component: GithubUserComponent },
  { path: 'users/:owner/:repo/issues', component: RepositorieComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
