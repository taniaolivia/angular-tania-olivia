import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  public modifyProfileForm!: FormGroup;

  data: any = [];

  constructor(private http: HttpClient, private profileService: ProfileService) {}

  ngOnInit(): void{
    this.modifyProfileForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

    this.http.get(environment.ApiUrl.users + "/1").subscribe((result) => {
      this.data.push(result);
    });

    console.log(this.data)
  }

  public onSubmit() {
    this.profileService.modify(
      this.modifyProfileForm!.get('username')!.value,
      this.modifyProfileForm!.get('password')!.value
    );
  }
}
