import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialService } from '../services/material.service';

@Component({
  selector: 'app-createMaterial',
  templateUrl: './createMaterial.component.html',
  styleUrls: ['./createMaterial.component.css'],
})
export class CreateMaterialComponent implements OnInit {
  public createMaterialForm!: FormGroup;
  id: any = this.router.url.slice(9, 10);

  constructor(private materialService: MaterialService, private router: Router) {}

  ngOnInit() {
    this.createMaterialForm = new FormGroup({
      ref: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
    });
  }

  public onSubmit() {
    this.materialService.create(
      this.id,
      this.createMaterialForm.get('ref')!.value,
      this.createMaterialForm!.get('name')!.value,
      this.createMaterialForm!.get('state')!.value
    );
  }
}