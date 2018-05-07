import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiUrl = 'https://api.github.com/';
const headers = new HttpHeaders().set('Authorization', 'token 7343186b2847b4423e1e132f1ba7ff0f91c3e08d');

@Injectable()
export class GithubApiService {

  constructor(private http: HttpClient) { }

  getUserExist(username: string) {
    return this.http.get(`${apiUrl}users/${username}`, { headers });
  }

  getReposByUsername(username: string) {
    return this.http.get(`${apiUrl}users/${username}/repos`, { headers });
  }

  getIssuesByRepo(owner: string, repo: string) {
    return this.http.get(`${apiUrl}repos/${owner}/${repo}/issues`, { headers });
  }
}
