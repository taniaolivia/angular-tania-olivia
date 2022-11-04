import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class MaterialService {
  
  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}

  data: any;
  status: string = "";
  materials: any;
  material: any;

  public add(id: number, materialId: any) : void{
    
    this.http.get(environment.ApiUrl.listeEmployes + "/" + id).subscribe((result: any) => {
      this.materials = result.materialAssigned;
      const object = Object.assign({}, ...this.materials);  
        
      this.http.get(environment.ApiUrl.materiel + materialId).subscribe((result) => {
          this.material = result;
          this.http.patch(environment.ApiUrl.listeEmployes + "/" + id, {
            materialAssigned: [
             object,
             this.material
            ]
          }).subscribe(data => {
            this.data = data;
          });
      });
    });
    
    this.router.navigate(['/employe/' + id  + '/materials']);
  }

  public create(id: number, ref: string, name: string, state: string) : void{
    this.http.post(environment.ApiUrl.materiel, {
      name: name,
      state: state,
      ref: ref
    }).subscribe(data => {
      this.data = data;
    });

    this.router.navigate(['/employe/' + id  + '/materials']);
  }
}
