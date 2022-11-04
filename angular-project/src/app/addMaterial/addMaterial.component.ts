import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialService } from '../services/material.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-addMaterial',
  templateUrl: './addMaterial.component.html',
  styleUrls: ['./addMaterial.component.css'],
})
export class AddMaterialComponent implements OnInit {
  public addMaterialForm!: FormGroup;
  material: any = [];
  materialId: any = [];
  id: any = this.router.url.slice(9, 10);

  constructor(private materialService: MaterialService, private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.http.get(environment.ApiUrl.materiel).subscribe((result: any) => {
      this.material = result;
    });
  }

  public selected(id: any){
    this.materialId.push(id);
  }

  public onSubmit() {
   this.materialService.add(
    this.id,
    this.materialId
   )
  }
}