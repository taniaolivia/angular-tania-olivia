import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class ProfileService {
  
  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}

  data: any =  [];

  public modify(username: string, password: string): void{
    this.http.put(environment.ApiUrl.users + "/1", {
      username: username,
      password: password
    }).subscribe(data => {
      this.data = data;
    });
    this.router.navigate(['/']);
  }
}
