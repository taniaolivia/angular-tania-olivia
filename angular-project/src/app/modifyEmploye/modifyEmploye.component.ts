import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeService } from '../services/employe.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifyEmploye',
  templateUrl: './modifyEmploye.component.html',
  styleUrls: ['./modifyEmploye.component.css'],
})
export class ModifyEmployeComponent implements OnInit {
  public modifyEmployeForm!: FormGroup;
  data: any = [];
  id: any = this.router.url.slice(9, 10);
  validated: any;  

  constructor(private http: HttpClient, private employeService: EmployeService,   private router: Router) {}

  ngOnInit() {
    this.modifyEmployeForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      age: new FormControl(''),
      validated: new FormControl(''),
    });

    this.http.get(environment.ApiUrl.listeEmployes + "/" + this.id).subscribe((result) => {
      this.data.push(result);
    });
  }

  public selected(select: boolean){
    this.validated = select;
  }

  public onSubmit() {
    this.employeService.modify(
      this.id,
      this.modifyEmployeForm.get('firstname')!.value,
      this.modifyEmployeForm!.get('lastname')!.value,
      this.modifyEmployeForm!.get('email')!.value,
      this.modifyEmployeForm!.get('age')!.value,
      this.validated
    );
  }
}