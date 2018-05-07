import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit, AfterViewInit {

  userInfo: any;

  username: string;
  displayedColumns = ['id', 'name', 'language', 'open_issues'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private githubService: GithubApiService, private route: ActivatedRoute) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.getUserInfo();
    this.getRepos();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  getRepos() {
    this.username = this.route.snapshot.paramMap.get('username');
    this.githubService.getReposByUsername(this.username).subscribe((data: any) => {
      this.dataSource.data = data;
    });
  }

  getUserInfo() {
    this.username = this.route.snapshot.paramMap.get('username');
    this.githubService.getUserExist(this.username).subscribe((data: any) => {
      this.userInfo = data;
    });
  }

}
export interface RepoData {
  id: number;
  name: string;
  language: string;
  open_issues: number;
}
