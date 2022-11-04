import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeService } from '../services/employe.service';

@Component({
  selector: 'app-addEmploye',
  templateUrl: './addEmploye.component.html',
  styleUrls: ['./addEmploye.component.css'],
})
export class AddEmployeComponent implements OnInit {
  public addEmployeForm!: FormGroup;

  constructor(private employeService: EmployeService) {}

  ngOnInit() {
    this.addEmployeForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });
  }

  public onSubmit() {
    this.employeService.add(
      this.addEmployeForm.get('firstname')!.value,
      this.addEmployeForm!.get('lastname')!.value,
      this.addEmployeForm!.get('email')!.value
    );
  }
}