import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username = '';
  userNotFound: boolean;

  constructor(private githubService: GithubApiService, private router: Router) { }

  ngOnInit() {
  }

  buscarRepo() {
    this.githubService.getUserExist(this.username).subscribe((data: any) => {
      this.userNotFound = true;
      this.router.navigate(['users', this.username, 'repos']);
    }, (error) => {
      if (error.statusText === 'Not Found') {
        this.userNotFound = true;
      }
    });
  }

}
