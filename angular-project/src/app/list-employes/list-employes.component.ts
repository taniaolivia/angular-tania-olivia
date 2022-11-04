import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmployeService } from '../services/employe.service';

@Component({
  selector: 'app-list-employes',
  templateUrl: './list-employes.component.html',
  styleUrls: ['./list-employes.component.css']
})


export class ListEmployesComponent implements OnInit {

  data: any = [];
  material: any = [];
  searchText: any;

  constructor(private http: HttpClient, private employeService: EmployeService) {}

  ngOnInit(): void{
    this.http.get(environment.ApiUrl.listeEmployes).subscribe((result) => {
      this.data = result;
    });

    this.http.get(environment.ApiUrl.materiel).subscribe((result) => {
      this.material.push(result);

    });
  }

  deleteEmploye(id: number): void{
    this.employeService.delete(id);
  }

  search(){
    const filteredData = this.data.filter((d: any) => d.id == this.searchText || d.firstname.includes(this.searchText) || d.lastname.includes(this.searchText));
    this.data = filteredData;
   
    if(this.searchText == ""){
      this.http.get(environment.ApiUrl.listeEmployes).subscribe((result) => {
        this.data = result;
      });
    }
  }

  filteredByMaterial(m: any){
    this.data = [];
    this.http.get(environment.ApiUrl.listeEmployes).subscribe((result: any) => {
      result.map((d: any) => {
        d.materialAssigned.map((mm: any) => {
          if(mm.id === m){
            this.data.push(d);
          }
        })
      })
    });
  }


}
