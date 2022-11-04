import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmployeService } from '../services/employe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-materials-employe',
  templateUrl: './list-materials-employe.component.html',
  styleUrls: ['./list-materials-employe.component.css']
})

export class ListMaterialsEmployeComponent implements OnInit {

  data: any = [];
  material: any = [];
  id: any = this.router.url.slice(9, 10);

  constructor(private http: HttpClient, private employeService: EmployeService, private router: Router) {}

  ngOnInit(): void{
    this.http.get(environment.ApiUrl.listeEmployes + "/" + this.id).subscribe((result: any) => {
      this.data.push(result.materialAssigned);
    });

    this.http.get(environment.ApiUrl.materiel).subscribe((result: any) => {
      this.material = result;
    });
  }


}
