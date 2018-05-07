import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'app-repositorie',
  templateUrl: './repositorie.component.html',
  styleUrls: ['./repositorie.component.css']
})
export class RepositorieComponent implements OnInit, AfterViewInit {

  owner: string;
  repo: string;

  displayedColumns = ['id', 'title', 'body', 'state', 'labels', 'updated_at'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute, private githubService: GithubApiService) { }

  ngOnInit() {
    this.getIssues();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  getIssues() {
    this.owner = this.route.snapshot.paramMap.get('owner');
    this.repo = this.route.snapshot.paramMap.get('repo');
    this.githubService.getIssuesByRepo(this.owner, this.repo).subscribe((data: any) => {
      this.dataSource.data = data;
    });
  }

}
