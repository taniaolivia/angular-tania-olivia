import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class AuthenticationService {
  private tokenKey = 'token';
  private data : any = [];
  
  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  public login(username: string, password: string): void {
    this.http.get(environment.ApiUrl.users).subscribe(result => {
      this.data = result;
      if(this.data[0].username == username && this.data[0].password == password){
        localStorage.setItem(this.tokenKey, "token");
        this.router.navigate(['/']);
      }
      else if(this.data[0].username != username && this.data[0].password == password){
        console.log("Wrong username");
      }
      else if(this.data[0].password != password && this.data[0].username == username){
        console.log("Wrong password");
      }
    })
  }

  public logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }
}
