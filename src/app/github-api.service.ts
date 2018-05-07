import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiUrl = 'https://api.github.com/';
const headers = new HttpHeaders().set('Authorization', 'token ef0dda6cf750bf677f20e61d881c4b31bb8e5ec3');

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
