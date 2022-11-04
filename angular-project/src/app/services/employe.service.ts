import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class EmployeService {
  
  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}

  data: any =  [];
  status: string = "";

  public add(firstname: string, lastname: string, email: string) : void{
    this.http.post(environment.ApiUrl.listeEmployes, {
      firstname: firstname,
      lastname: lastname,
      email: email,
      profilImage: "./images/man.png"
    }).subscribe(data => {
      this.data = data;
    });
    this.router.navigate(['/employes']);
  }

  public delete(id : number) : void{
    this.http.delete(environment.ApiUrl.listeEmployes + "/" + id).subscribe(() => {
      this.status = "Employe is being deleted succefully";
    });
    window.location.reload();
  }

  public modify(id : number, firstname: string, lastname: string, email: string, age: string, validated: boolean): void{
    this.http.put(environment.ApiUrl.listeEmployes + "/" + id, {
      firstname: firstname,
      lastname: lastname,
      email: email,
      age: age,
      validated: validated,
      profilImage: "./images/man.png"
    }).subscribe(data => {
      this.data = data;
    });
    this.router.navigate(['/employes']);
  }
}
